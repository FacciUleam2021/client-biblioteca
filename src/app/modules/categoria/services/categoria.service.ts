import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  sendFormCategoria(names: string): Observable<any> {
    const body = {
      names
    }
    return this.http.post(`${this.URL}/categoria`, body)
  }
  getDataCategoria(): Observable<any> {

    return this.http.get(`${this.URL}/categoria`)
  }
  getCategoriaById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/categoria/${id}`)
  }
  updateCategoriaById(id: string, params: any): Observable<any> {
    return this.http.put(`${this.URL}/categoria/${id}`,params)
  }
  deleteCategoriaById(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/categoria/${id}`)
  }
}
