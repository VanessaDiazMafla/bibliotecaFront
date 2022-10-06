import { Component, OnInit } from '@angular/core';
import { prestamo } from '../interfaces/prestamo';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  img = 'https://cdn-icons-png.flaticon.com/512/5579/5579178.png'

  prestamoLibros: prestamo []=[

    {
      id: '123',
      isbn: 'a123',
      fecha_prestamo: new Date(), 
      fecha_devolucion: new Date(), 
      
    },
    {
      id: '1234',
      isbn: 'a1234',
      fecha_prestamo: new Date(), 
      fecha_devolucion: new Date(), 
      
    }
    
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
