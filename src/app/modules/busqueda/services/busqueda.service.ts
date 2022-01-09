import { environment } from './../../../../environments/environment';
import { HttpClient,HttpHeaders , HttpEvent, HttpResponse ,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { 
   
  }
  getDataLibro(): Observable<any> {

    return this.http.get(`${this.URL}/librosRoures/busqueda`)
  }
}
