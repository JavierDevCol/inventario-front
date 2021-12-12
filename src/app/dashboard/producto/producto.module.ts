import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCrearComponent } from './producto-crear/producto-crear.component';
import { ProductoListarComponent } from './producto-listar/producto-listar.component';
import {ProductoRoutingModule} from "./producto-routing.module";
import { ProductoComponent } from './producto.component';



@NgModule({
  declarations: [
    ProductoCrearComponent,
    ProductoListarComponent,
    ProductoComponent
  ],
  exports: [
    ProductoCrearComponent,
    ProductoListarComponent
  ],
  imports: [
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
