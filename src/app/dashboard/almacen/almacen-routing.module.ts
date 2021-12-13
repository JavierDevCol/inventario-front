import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AlmacenComponent} from "./almacen.component";
import {AlmacenCrearComponent} from "./almacen-crear/almacen-crear.component";
import {AlmacenListarComponent} from "./almacen-listar/almacen-listar.component";

const routes: Routes = [
  {
    path: '',
    component: AlmacenComponent,
    children: [
      {
        path: 'crear',
        component: AlmacenCrearComponent
      },
      {
        path: 'listar',
        component: AlmacenListarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenRoutingModule {
}
