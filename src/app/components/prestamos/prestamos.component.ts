import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../interfaces/Prestamo';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  img = 'https://cdn-icons-png.flaticon.com/512/5579/5579178.png'

  prestamoLibros: Prestamo []=[

    {
      id_usuario: 123,
      isbn: 'a123',
      fechaPrestamo: new Date(), 
      fechaDevolucion: new Date(), 
      disponibilidad: ''
    },
    {
      id_usuario: 1234,
      isbn: 'a1234',
      fechaPrestamo: new Date(), 
      fechaDevolucion: new Date(), 
      disponibilidad: ''
    }
    
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
