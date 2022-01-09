import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  sendFormAutor(firstname: string, lastname: string): Observable<any> {
    const body = {
      firstname,
      lastname
    }
    return this.http.post(`${this.URL}/autor`, body)
  }
  getDataAutores(): Observable<any> {

    return this.http.get(`${this.URL}/autor`)
  }
  getAutorById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/autor/${id}`)
  }
  updateAutorById(id: string, params: any): Observable<any> {
    return this.http.put(`${this.URL}/autor/${id}`,params)
  }
  deleteAutorById(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/autor/${id}`)
  }
}
