import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../interfaces/Login';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 // img='https://img.freepik.com/vector-gratis/ilustracion-concepto-formularios_114360-4797.jpg?w=740&t=st=1665093811~exp=1665094411~hmac=2a902042a5414e99e0ce55f9e04bcd9c78cbd204385ad410786b65c2d318bc44'
  img='https://img.freepik.com/vector-premium/libro-abierto-letras-magicas_713151-40.jpg?w=826'
  registrarUser: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registrarUser = this.fb.group({

      id:['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required]
      //Validators.minLength(3)]

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
