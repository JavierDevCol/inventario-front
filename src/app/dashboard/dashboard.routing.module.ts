import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'producto',
        loadChildren: () => import('./producto/producto.module').then(module => module.ProductoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
