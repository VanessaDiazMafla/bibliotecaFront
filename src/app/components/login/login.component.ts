
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../interfaces/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  img = 'https://img.freepik.com/vector-gratis/libro-lectura-mujer-joven-interior-biblioteca_74855-19956.jpg?w=996&t=st=1664230946~exp=1664231546~hmac=ce0ecaec2e79abbe6b06d04dfc280c0909bf1fbacbc16c0f45ee4ac175fadfbe'
  
  iniciarUser: FormGroup;

  constructor(private fb: FormBuilder) {
    
    this.iniciarUser = this.fb.group({

      correo: ['', Validators.required],
      contrasenia: ['', Validators.required]

    })

  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    console.log(this.iniciarUser);

    const login: Login = {
      correo: this.iniciarUser.get('correo')?.value,
      contrasenia: this.iniciarUser.get('contrasenia')?.value,
    }

    console.log(login);

  }
}
  
/*
  login(form:NgForm){
    //se recibe la inf

    const correo=form.value.correo

    const contraseña=form.value.contraseña
  }*/

