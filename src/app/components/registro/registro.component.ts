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

      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required]

    })
   }

   registrar(){

    console.log(this.registrarUser);

    const login: Login = {

      nombre: this.registrarUser.get('nombre')?.value,
      correo: this.registrarUser.get('correo')?.value,
      contraseña: this.registrarUser.get('contraseña')?.value
    }

    console.log(login);

  }

  ngOnInit(): void {
  }



}
