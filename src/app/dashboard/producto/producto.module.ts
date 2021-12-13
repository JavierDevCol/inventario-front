import {NgModule} from '@angular/core';
import {ProductoCrearComponent} from './producto-crear/producto-crear.component';
import {ProductoListarComponent} from './producto-listar/producto-listar.component';
import {ProductoRoutingModule} from "./producto-routing.module";
import {ProductoComponent} from './producto.component';
import {ProductoService} from "./shared/service/producto.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ProductoCrearComponent,
    ProductoListarComponent,
    ProductoComponent
  ],
  exports: [
    ProductoCrearComponent,
    ProductoListarComponent,
    ProductoComponent
  ],
  imports: [
    ProductoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    ProductoService
  ]
})
export class ProductoModule {
}
