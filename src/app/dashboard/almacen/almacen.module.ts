import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlmacenCrearComponent} from './almacen-crear/almacen-crear.component';
import {AlmacenListarComponent} from './almacen-listar/almacen-listar.component';
import {AlmacenComponent} from './almacen.component';
import {AlmacenRoutingModule} from "./almacen-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InventarioService} from "./shared/service/inventario.service";


@NgModule({
  declarations: [
    AlmacenCrearComponent,
    AlmacenListarComponent,
    AlmacenComponent
  ],
  exports: [
    AlmacenCrearComponent,
    AlmacenListarComponent,
    AlmacenComponent
  ],
  imports: [
    AlmacenRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    InventarioService
  ]
})
export class AlmacenModule {
}
