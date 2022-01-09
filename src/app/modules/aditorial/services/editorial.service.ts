import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  sendFormEditorial(name: string, pais: string): Observable<any> {
    const body = {
      name, pais
    }
    return this.http.post(`${this.URL}/editorial`, body)
  }
  getDataEditorial(): Observable<any> {

    return this.http.get(`${this.URL}/editorial`)
  }
  getEditorialById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/editorial/${id}`)
  }
  updateEditorialById(id: string, params: any): Observable<any> {
    return this.http.put(`${this.URL}/editorial/${id}`,params)
  }
  deleteEditorialById(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/editorial/${id}`)
  }
}
