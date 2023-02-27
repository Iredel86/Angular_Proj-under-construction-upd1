import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface FileUploadResponse {
  success: boolean;
  message: string;
  url?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PhotoUploadComponent {
  selectedFile: File | undefined;
  isUploading = false;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  
  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a file to upload.';
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(this.selectedFile.type)) {
      this.errorMessage = 'File type not supported. Please upload a JPEG or PNG image.';
      return;
    }

    if (this.selectedFile.size > 5 * 1024 * 1024) {
      this.errorMessage = 'File size is too large. Please upload a file smaller than 5MB.';
      return;
    }

    this.errorMessage = undefined;
    this.successMessage = undefined;
    this.isUploading = true;

    const formData = new FormData();
    formData.append('photo', this.selectedFile, this.selectedFile.name);

    this.http.post<FileUploadResponse>('/api/upload', formData).subscribe({
      next: (response) => {
        this.isUploading = false;
        if (response.success) {
          this.successMessage = 'File uploaded successfully!';
          if (response.url) {
            console.log(`Uploaded file URL: ${response.url}`);
          }
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (error: HttpErrorResponse) => {
        this.isUploading = false;
        if (error.status === 413) {
          this.errorMessage = 'File size is too large. Please upload a file smaller than 5MB.';
        } else {
          this.errorMessage = 'File upload failed. Please try again later.';
          console.log(error);
        }
      }
    });
  }
}

