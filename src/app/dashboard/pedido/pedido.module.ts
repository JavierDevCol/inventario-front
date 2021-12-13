import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoCrearComponent } from './pedido-crear/pedido-crear.component';
import { PedidoListarComponent } from './pedido-listar/pedido-listar.component';
import { PedidoComponent } from './pedido.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PedidoRoutingModule} from "./pedido-routing.module";
import {PedidoService} from "./shared/service/pedido.service";



@NgModule({
  declarations: [
    PedidoCrearComponent,
    PedidoListarComponent,
    PedidoComponent
  ],
  exports: [
    PedidoCrearComponent,
    PedidoListarComponent,
    PedidoComponent
  ],
  imports: [
    PedidoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    PedidoService
  ]
})
export class PedidoModule { }
