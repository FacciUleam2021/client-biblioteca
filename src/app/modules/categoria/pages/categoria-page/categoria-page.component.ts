import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  CategoriaService } from '@modules/categoria/services/categoria.service';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrls: ['./categoria-page.component.css']
})
export class CategoriaPageComponent implements OnInit {

  formCategoria: FormGroup = new FormGroup({});
  idk: boolean = false
  listaCategoria :any =[];
  constructor(private categoriaService: CategoriaService) { }
  ngOnInit(): void {
    this.loadDataAll();
    this.formCategoria = new FormGroup(
      {
        id: new FormControl('', []),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
            Validators.maxLength(40)
        ]),
       
      }
    )
  }
  SendFormCategoria(){
    let ids = this.formCategoria.value.id;
    if (ids) {
      this.categoriaService.updateCategoriaById(ids, this.formCategoria.value)
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
      this.loadDataAll();
       this.formCategoria.reset();
       this.idk=false;
      },
        err => {//TODO error 400>=
          
          console.log('error con autor');
        })
    }else{
      const {name} = this.formCategoria.value
      this.categoriaService.sendFormCategoria(name)
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
      this.loadDataAll();
       this.formCategoria.reset();
       this.idk=false;
      },
        err => {//TODO error 400>=
          
          console.log('error con autor');
        })
    }
  
  }
  async loadDataAll(): Promise<any> {
    this.listaCategoria = await this.categoriaService.getDataCategoria().toPromise()
  }

  
  receiveData(id: string){
    this.formCategoria.reset();

    this.categoriaService.getCategoriaById(id)
    .subscribe(
      res => {
        console.log(res)
        this.formCategoria.controls["id"].setValue(res.id);
        this.formCategoria.controls["name"].setValue(res.name);
        
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
        this.categoriaService.deleteCategoriaById(id)
        .subscribe(
          res => {
            this.loadDataAll();
          },
    
        )
      }
    }
   
  }
  formatear(){
    this.formCategoria.reset();
    this.idk=false;
  }

}
