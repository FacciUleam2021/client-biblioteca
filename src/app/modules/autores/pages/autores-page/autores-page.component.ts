import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  AutorService } from '@modules/autores/services/autor.service';
@Component({
  selector: 'app-autores-page',
  templateUrl: './autores-page.component.html',
  styleUrls: ['./autores-page.component.css']
})
export class AutoresPageComponent implements OnInit {
  formAutor: FormGroup = new FormGroup({});
  idk: boolean = false
  listaAutores :any =[];
  constructor(private autorService: AutorService) { }
  
  ngOnInit(): void {
    this.loadDataAll();
    this.formAutor = new FormGroup(
      {
        id: new FormControl('', []),
        firstname: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
            Validators.maxLength(40)
        ]),
        lastname: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(40)
          ])
      }
    )
  }
  SendFormAutor(){
    let ids = this.formAutor.value.id;
    if (ids) {
      this.autorService.updateAutorById(ids, this.formAutor.value)
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
      this.loadDataAll();
       this.formAutor.reset();
      },
        err => {//TODO error 400>=
          
          alert('error con autor');
        })
    }else{
      const { firstname, lastname} = this.formAutor.value
      this.autorService.sendFormAutor(firstname, lastname)
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
      this.loadDataAll();
       this.formAutor.reset();
      },
        err => {//TODO error 400>=
          this.formAutor.reset();
          alert('error con send');
        })
    }
  
  }
  async loadDataAll(): Promise<any> {
    this.listaAutores = await this.autorService.getDataAutores().toPromise()
  }

  
  receiveData(id: string){
    this.formAutor.reset();
    let person = {
      firstName: '',
      lastName:  ''
    }
    this.autorService.getAutorById(id)
    .subscribe(
      res => {
        person =res;
        console.log(res)
        this.formAutor.controls["id"].setValue(res.id);
        this.formAutor.controls["firstname"].setValue(res.firstname);
        this.formAutor.controls["lastname"].setValue(res.lastname);
         this.idk=true
      },

    )
  }
  deleteData(id: string){
    if (id) {
      if (
        confirm(
          "ESTA SEGURO QUE QUIERE ELIMINAR? YA QUE ESOS CAMBIOS NO SE PUEDE REVERTIR"
        )
      ) {
        this.autorService.deleteAutorById(id)
        .subscribe(
          res => {
            this.loadDataAll();
          },
    
        )
      }
    }
   
  }
  formatear(){
    this.formAutor.reset();
    this.idk=false;
  }
}
