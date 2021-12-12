import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlmacenCrearComponent } from './almacen-crear/almacen-crear.component';
import { AlmacenListarComponent } from './almacen-listar/almacen-listar.component';



@NgModule({
  declarations: [
    AlmacenCrearComponent,
    AlmacenListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlmacenModule { }
