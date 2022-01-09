import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false
  errorRegister: boolean = false
  formLogin: FormGroup = new FormGroup({});
  formRegistro: FormGroup = new FormGroup({});
  ifOptios: String = 'login';
  constructor(private authService: AuthService, private cookie: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    this.destroyData();
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
    this.formRegistro = new FormGroup(//username
      {
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        age: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(3)
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ]),
         img: new FormControl('',[]),
         status: new FormControl('',[])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
        const { tokenSession } = responseOk;
        localStorage.setItem('data-person', JSON.stringify(responseOk.isaccesos.data));
        this.cookie.set('token', tokenSession, 4, '/') 
        this.router.navigate(['/', 'tracks'])
      },
        err => {//TODO error 400>=
          this.errorSession = true
          console.log('error con auth');
        })

  }
  sendRegister(): void {
    const { email, password, username, age, name } = this.formRegistro.value
    const img= 'https://res.cloudinary.com/stebann/image/upload/v1631310792/profile_b9t64l.png'
    const status= '1'
    this.authService.sendFormRegister(email, password, username, age, name, img, status)
    .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
     console.log('registro exitoso')
     this.formRegistro.reset();
     this.ifOptios= 'login'
    },
      err => {//TODO error 400>=
        this.errorRegister = true
        console.log('error con auth');
      })
  }
  destroyData(){
    this.cookie.deleteAll();
    localStorage.clear();

  }
}
