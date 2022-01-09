import { environment } from './../../../../environments/environment';
import { HttpClient,HttpHeaders , HttpEvent, HttpResponse ,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private readonly URL = environment.api
  constructor(private http: HttpClient) { 
   
  }

  sendFormLibro(params: any ): Observable<any> {

    return this.http.post(`${this.URL}/libro`, params)
  }
  getDataLibro(): Observable<any> {

    return this.http.get(`${this.URL}/libro`)
  }
  getLibroById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/libro/${id}`)
  }
  updateLibroById(id: string, params: any): Observable<any> {
    return this.http.put(`${this.URL}/libro/${id}`,params)
  }
  deleteLibroById(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/libro/${id}`)
  }
  //json data pupulate
  getDataAutor(): Observable<any> {

    return this.http.get(`${this.URL}/autor`)
  }
  getDataCategoria(): Observable<any> {

    return this.http.get(`${this.URL}/categoria`)
  }
  getDataEditorial(): Observable<any> {

    return this.http.get(`${this.URL}/editorial`)
  }
  //post uploads to
  public uploadFile(file: Blob): Observable<HttpEvent<void>> {
    const formData = new FormData();
    formData.append('myFile', file);
  
    return this.http.request(new HttpRequest(
      'POST',
      `${this.URL}/uploadRoutes`,
      formData,
      {
        reportProgress: true
      }));
  }
}
