import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/accesos/login`, body)
  }

  sendFormRegister(email: string, password: string, username: string, age: string, name: string, img: string, status: string): Observable<any> {
    const body = {
      username,
      name,
      age,
      email,
      img,
      status,
      password,
    }
    return this.http.post(`${this.URL}/accesos/register`, body)
  }

  suma(a: number, b: number): number {
    return a + b
  }
}
