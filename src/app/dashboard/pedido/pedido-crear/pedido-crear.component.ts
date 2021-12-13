import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PedidoService} from "../shared/service/pedido.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pedido-crear',
  templateUrl: './pedido-crear.component.html',
  styleUrls: ['./pedido-crear.component.css']
})
export class PedidoCrearComponent implements OnInit {
  titularAlerta: string;
  pedidoForm: FormGroup;
  constructor(protected pedidoServices: PedidoService, private navegacion: Router) { }

  ngOnInit() {
    this.construirFormularioPedido();
  }

  cerar() {
    this.pedidoServices.guardar(this.pedidoForm.value).subscribe(
      (resp) => {
        Swal.fire({
          title: 'Aprobado!',
          text: 'Precio total del pedido: ' + resp,
          icon: 'success',
          confirmButtonText: 'Listo'
        });
        this.navegacion.navigate(['pedido', 'listar']);
      },
      ( {error} ) => {
        Swal.fire({
          title: 'Error!',
          text: error.mensaje,
          icon: 'error',
          confirmButtonText: 'Listo'
        });
        throw new Error(error.mensaje);
      }
    );
  }

  private construirFormularioPedido() {
    this.pedidoForm = new FormGroup({
      cantidad: new FormControl('', [Validators.required]),
      producto: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required])
    });
  }


}
