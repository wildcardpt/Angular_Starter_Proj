import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PythonApiServiceService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  getExams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/exams`);
  }

  createExam(exam: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/exams`, exam);
  }
}
