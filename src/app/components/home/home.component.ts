import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img1='https://fondosmil.com/fondo/1673.jpg'
  img2='https://fondosmil.com/fondo/1672.jpg'
  img3=''
  constructor() { }

  ngOnInit(): void {
  }

}
