import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibServicesService } from 'lib-Services';
 LibServicesService

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})


export class AppComponent implements OnInit {
  title = '';
  message = '';

  constructor(private apiService: LibServicesService){}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data: { title: string; message: string; }) => {
      this.title = data.title;
      this.message = data.message;
    })
  }
}
