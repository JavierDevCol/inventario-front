import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../shared/service/producto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit {

  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService, private navegacion: Router) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  cerar() {
    this.productoServices.guardar(this.productoForm.value).subscribe(
      () => {
        Swal.fire({
          title: 'Producto "' + this.productoForm.value.nombre + '" Creado',
          icon: 'success',
          confirmButtonText: 'Listo'
        });
        this.navegacion.navigate(['producto', 'listar']);
      },
      ({ error }) => {
        Swal.fire({
          title: error.mensaje,
          text: this.productoForm.value.nombre,
          icon: 'warning',
          confirmButtonText: 'Listo'
        });
      }
    );
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
    });
  }

}
