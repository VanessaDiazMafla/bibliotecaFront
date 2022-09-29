import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../interfaces/Login';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registrarUser: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registrarUser = this.fb.group({

      id:['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required,Validators.minLength(3)]

    })
   }

   registrar(){

    console.log(this.registrarUser);

    const login: Login = {

      id:this.registrarUser.get('id')?.value,
      nombre: this.registrarUser.get('nombre')?.value,
      correo: this.registrarUser.get('correo')?.value,
      contrasenia: this.registrarUser.get('contrasenia')?.value
    }

    console.log(login);

  }

  ngOnInit(): void {
  }



}
