# Generated by Django 4.0.6 on 2023-02-25 09:57

import appt.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('appt', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='APIs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('image', models.ImageField(upload_to='Posted_Images')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('image', models.FileField(upload_to=appt.models.upload_to)),
            ],
            options={
                'db_table': 'Product Images',
            },
        ),
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='appt.image'),
        ),
    ]
