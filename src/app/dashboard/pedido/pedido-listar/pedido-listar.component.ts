import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Pedido} from "../shared/model/pedido";
import {PedidoService} from "../shared/service/pedido.service";

@Component({
  selector: 'app-pedido-listar',
  templateUrl: './pedido-listar.component.html',
  styleUrls: ['./pedido-listar.component.css']
})
export class PedidoListarComponent implements OnInit {

  public listaPedidos: Observable<Pedido[]>;

  constructor(protected pedidoService: PedidoService) { }

  ngOnInit() {
    this.listaPedidos = this.pedidoService.consultar();
  }

}
