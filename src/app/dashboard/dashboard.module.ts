import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard.routing.module";
import {SidersComponent} from "../core/siders/siders.component";
import {HeaderComponent} from "../core/header/header.component";
import {ProductoModule} from "./producto/producto.module";
import {PedidoModule} from "./pedido/pedido.module";


@NgModule({
  declarations: [
    DashboardComponent,
    SidersComponent,
    HeaderComponent
  ],
  exports: [
    DashboardComponent,
    SidersComponent,
    HeaderComponent
  ],
  imports: [
    DashboardRoutingModule,
    ProductoModule,
    PedidoModule
  ]
})
export class DashboardModule {
}
