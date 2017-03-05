import { Component } from '@angular/core';

import { Proyecto } from './models/proyecto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Proyectos';
  public proyecto:Proyecto[];
  public p:JSON;
  public obj:any;

  constructor(){
  this.obj = {
    'project1':{'name':'nombreP','id':'12'},
    'project2':{'name':'nombreP','id':'12'}
          };
  this.p = <JSON>this.obj;

   this.proyecto[0] = new Proyecto("Nombre Proyecto","url","id","page");
   this.proyecto[0] = new Proyecto("Nombre Proyecto2","url","id","page");
  }


}
