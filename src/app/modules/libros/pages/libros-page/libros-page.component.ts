import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from '@modules/libros/services/libros.service';

@Component({
  selector: 'app-libros-page',
  templateUrl: './libros-page.component.html',
  styleUrls: ['./libros-page.component.css'],
})
export class LibrosPageComponent implements OnInit {
  selectedCar: string = '';
  formLibro: FormGroup = new FormGroup({});
  idk: boolean = false;
  listaLIbros: any = [];
  listaAutor: any = [];
  listaCat: any = [];
  listaEditorial: any = [];
  isUploading: boolean = false;
  valorImagen: string = '';
  valorDocumento : string = '';
  valorImagen2: string = '';
  valorImagen3: string = '';
  ifload: boolean = false;
  constructor(private libroService: LibrosService) {}

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataAllAutores();
    this.loadDataAllCat();
    this.loadDataAllEDit();
    this.formLibro = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      anio: new FormControl('', [Validators.required]),
      link: new FormControl('', []),
      fkrelacionados: new FormControl('', []),
      fkautor: new FormControl('', [Validators.required]),
      fkcategoria: new FormControl('', [Validators.required]),
      fkeditorial: new FormControl('', [Validators.required]),//
      documento: new FormControl('', []),
    });
  }
  SendFormLIbros() {
    this.ifload = true;
    let ids = this.formLibro.value.id;
    if (ids) {
      this.formLibro.value.link = this.valorImagen;
      this.formLibro.value.documento = this.valorDocumento;
      if (this.selectedCar == '') {
        this.formLibro.value.fkrelacionados = '1';
      } else {
        this.formLibro.value.fkrelacionados = this.selectedCar.toString();
      }
      this.libroService.updateLibroById(ids, this.formLibro.value).subscribe(
        (responseOk) => {
          //TODO: Cuando el usuario credenciales Correctas ✔✔
          this.loadDataAll();
          this.formatear();
          this.idk = false;
          this.ifload = false;
        },
        (err) => {
          //TODO error 400>=
          this.ifload = false;
          console.log('error con autor');
        }
      );
    } else {
      if (this.valorImagen != '') {
        this.formLibro.value.link = this.valorImagen;
        this.formLibro.value.documento = this.valorDocumento;
        if (this.selectedCar == '') {
          this.formLibro.value.fkrelacionados = '1';
        } else {
          this.formLibro.value.fkrelacionados = this.selectedCar.toString();
        }
        console.log(this.formLibro.value);
        this.libroService.sendFormLibro(this.formLibro.value).subscribe(
          (responseOk) => {
            //TODO: Cuando el usuario credenciales Correctas ✔✔
            this.loadDataAll();
            this.formatear();
            this.idk = false;
            this.ifload = false;
          },
          (err) => {
            //TODO error 400>=
            this.ifload = false;
            console.log('error con autor');
          }
        );
      }
    }
  }
  async loadDataAll(): Promise<any> {
    this.listaLIbros = await this.libroService.getDataLibro().toPromise();
    console.log(this.listaLIbros);
  }

  async loadDataAllAutores(): Promise<any> {
    this.listaAutor = await this.libroService.getDataAutor().toPromise();
  }

  async loadDataAllCat(): Promise<any> {
    this.listaCat = await this.libroService.getDataCategoria().toPromise();
  }
  async loadDataAllEDit(): Promise<any> {
    this.listaEditorial = await this.libroService
      .getDataEditorial()
      .toPromise();
  }
  receiveData(id: string) {
    this.formLibro.reset();

    this.libroService.getLibroById(id).subscribe((res) => {
      console.log(res);
      this.formLibro.controls['id'].setValue(res.id);
      this.formLibro.controls['name'].setValue(res.name);
      this.formLibro.controls['anio'].setValue(res.anio);
      this.formLibro.controls['fkautor'].setValue(res.fkautor);
      this.formLibro.controls['fkcategoria'].setValue(res.fkcategoria);
      this.formLibro.controls['fkeditorial'].setValue(res.fkeditorial);
      
      this.valorImagen = res.link;
      this.valorDocumento = res.documento
      this.selectedCar = res.fkrelacionados.split(',');
      this.idk = true;
    });
  }

  deleteData(id: string) {
    if (id) {
      if (
        confirm(
          'ESTA SEGURO QUE QUIERE ELIMINAR? YA QUE ESOS CAMBIOS NO SE PUEDE REVERTIR'
        )
      ) {
        this.libroService.deleteLibroById(id).subscribe((res) => {
          this.loadDataAll();
          this.formatear();
        });
      }
    }
  }
  formatear() {
    this.formLibro.reset();
    this.idk = false;
    this.valorImagen = '';
    this.selectedCar = '';
    this.valorDocumento = '';
  }
  onFileChanged(event: any = null) {
    this.isUploading = true;
    //this.doUpload(event.target.files[0], false);
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      this.cargarimagenServer(file);
      this.valorImagen2 = file.name;
      console.log(file.name);
    }
  }
  cargarimagenServer(file: any) {
    this.libroService.uploadFile(file).subscribe(
      (response: any) => {
        this.valorImagen = 'http://143.198.224.118/' + this.valorImagen2;
      },
      (error) => {
        console.log(error);
        this.isUploading = false;
      }
    );
  }
  onFileChanged2(event: any = null) {
    this.isUploading = true;
    //this.doUpload(event.target.files[0], false);
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      this.cargarimagenServer2(file);
      this.valorImagen3 = file.name;
     
    }
  }
  cargarimagenServer2(file: any) {
    this.libroService.uploadFile(file).subscribe(
      (response: any) => {
        this.valorDocumento = 'http://143.198.224.118/' + this.valorImagen3;
      },
      (error) => {
        console.log(error);
        this.isUploading = false;
      }
    );
  }
}
