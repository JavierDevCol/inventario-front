import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoCrearComponent } from './pedido-crear/pedido-crear.component';
import { PedidoListarComponent } from './pedido-listar/pedido-listar.component';
import { PedidoComponent } from './pedido.component';



@NgModule({
  declarations: [
    PedidoCrearComponent,
    PedidoListarComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
