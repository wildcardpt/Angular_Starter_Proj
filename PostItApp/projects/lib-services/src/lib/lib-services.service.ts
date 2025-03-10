import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibServicesService {

  private apiUrl = 'http://localhost:5000/api';
  
  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }
}
