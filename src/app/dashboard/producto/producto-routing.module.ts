import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductoCrearComponent} from "./producto-crear/producto-crear.component";
import {ProductoListarComponent} from "./producto-listar/producto-listar.component";
import {ProductoComponent} from "./producto.component";

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
    children: [
      {
        path: 'crear',
        component: ProductoCrearComponent
      },
      {
        path: 'listar',
        component: ProductoListarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
