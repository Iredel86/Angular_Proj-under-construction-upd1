import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()]
})


export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

// export class AppComponent implements OnInit{
//   constructor(private custSer: CustomerService, public loginServ: LoginService) {
//     if (loginServ.access.length > 1) {
//       custSer.getCustomers().subscribe((res) => console.log(res));
//     }
    
//   }
  
//   ngOnInit() {}

  

  
  
// }


// title = '';

//   ar: ICustomer[] = [];

//   displayInfo = (stuName: string, ind: number) => {
//     console.log(ind);
//   };
//   test() {
//     console.log(this.loginServ.access);
//   }
//   getCustomers() {
//     this.custSer.getCustomers().subscribe((res) => (this.ar = res));
//   }