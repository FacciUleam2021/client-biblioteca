import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  EditorialService } from '@modules/aditorial/services/editorial.service';

@Component({
  selector: 'app-aditorial-page',
  templateUrl: './aditorial-page.component.html',
  styleUrls: ['./aditorial-page.component.css']
})
export class AditorialPageComponent implements OnInit {

  formEditoria: FormGroup = new FormGroup({});
  idk: boolean = false
  listaEditorial :any =[];
  constructor(private editorialService: EditorialService) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.formEditoria = new FormGroup(
      {
        id: new FormControl('', []),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
            Validators.maxLength(30)
        ]),
        pais: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
            Validators.maxLength(30)
        ]),
      }
    )
  }
  SendFormEditorial(){
    let ids = this.formEditoria.value.id;
    if (ids) {
      this.editorialService.updateEditorialById(ids, this.formEditoria.value)
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
      this.loadDataAll();
       this.formEditoria.reset();
       this.idk=false;
      },
        err => {//TODO error 400>=
          
          console.log('error con autor');
        })
    }else{
      const {name, pais} = this.formEditoria.value
      this.editorialService.sendFormEditorial(name, pais)
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
      this.loadDataAll();
       this.formEditoria.reset();
       this.idk=false;
      },
        err => {//TODO error 400>=
          
          console.log('error con autor');
        })
    }
  
  }
  async loadDataAll(): Promise<any> {
    this.listaEditorial = await this.editorialService.getDataEditorial().toPromise()
  }

  
  receiveData(id: string){
    this.formEditoria.reset();

    this.editorialService.getEditorialById(id)
    .subscribe(
      res => {
        console.log(res)
        this.formEditoria.controls["id"].setValue(res.id);
        this.formEditoria.controls["name"].setValue(res.name);
        this.formEditoria.controls["pais"].setValue(res.pais);
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
        this.editorialService.deleteEditorialById(id)
        .subscribe(
          res => {
            this.loadDataAll();
          },
    
        )
      }
    }
   
  }
  formatear(){
    this.formEditoria.reset();
    this.idk=false;
  }

}
