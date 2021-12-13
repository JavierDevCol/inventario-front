import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PedidoComponent} from "./pedido.component";
import {PedidoCrearComponent} from "./pedido-crear/pedido-crear.component";
import {PedidoListarComponent} from "./pedido-listar/pedido-listar.component";
const routes: Routes = [
  {
    path: '',
    component: PedidoComponent,
    children: [
      {
        path: 'crear',
        component: PedidoCrearComponent
      },
      {
        path: 'listar',
        component: PedidoListarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
