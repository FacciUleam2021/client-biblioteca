import { Component, OnInit } from '@angular/core';
import { PerfilService } from '@modules/perfil/services/perfil.service';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {
  data: any = {};
  ifloaded = false;
  optionsKey: string = '';
  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    const info = JSON.parse(localStorage.getItem('data-person')!);
    if (info) {
      this.optionsKey = info.id;
      if (this.optionsKey) {
        this.receiveData(this.optionsKey)
      }
    }
  }
  receiveData(id: string) {
    
    this.perfilService.getAutorById(id).subscribe((res) => {
      this.data= res;
      this.ifloaded = true;
    });
  }
}
