import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { prestamo } from '../interfaces/prestamo';

@Component({
  selector: 'app-agregar-prestamo',
  templateUrl: './agregar-prestamo.component.html',
  styleUrls: ['./agregar-prestamo.component.css']
})
export class AgregarPrestamoComponent implements OnInit {

  agregarPrestamo: FormGroup;
  console: any;

  constructor(private fb: FormBuilder) {

    this.agregarPrestamo = this.fb.group({
      id_usuario: ['', Validators.required],
      isbn: ['', Validators.required],
      disponibilidad: ['', Validators.required]
    })
  }

  agregar() {
    this.console.log(this.agregarPrestamo);

    const prestamo: prestamo = {
      id: this.agregarPrestamo.get('id')?.value,
      isbn: this.agregarPrestamo.get('isbn')?.value,
      fecha_prestamo: new Date(),
      fecha_devolucion: new Date()
    }
    this.console.log(prestamo);

  }

  ngOnInit(): void {
  }

}
