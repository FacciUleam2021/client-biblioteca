import { environment } from './../../../../environments/environment';
import { HttpClient,HttpHeaders , HttpEvent, HttpResponse ,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private readonly URL = environment.api
  constructor(private http: HttpClient) { 
    
  }
  getLibroById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/libro/${id}`)
  }
}
