import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestamo } from '../interfaces/Prestamo';

@Component({
  selector: 'app-agregar-prestamo',
  templateUrl: './agregar-prestamo.component.html',
  styleUrls: ['./agregar-prestamo.component.css']
})
export class AgregarPrestamoComponent implements OnInit {

  agregarPrestamo: FormGroup;
  console :any;

  constructor(private fb: FormBuilder) {

    this.agregarPrestamo=this.fb.group({
      id_usuario: ['', Validators.required],
      isbn: ['', Validators.required],
      disponibilidad: ['', Validators.required]
    })
   }

   agregar(){
    this.console.log(this.agregarPrestamo);

    const prestamo: Prestamo={
      id_usuario: this.agregarPrestamo.get('id_usuario')?.value,
      isbn: this.agregarPrestamo.get('isbn')?.value,
      disponibilidad: this.agregarPrestamo.get('disponibilidad')?.value,
      fechaPrestamo: new Date(),
      fechaDevolucion: new Date()
    }
    this.console.log(prestamo);
    
   }

  ngOnInit(): void {
  }

}
