import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioCrearComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
