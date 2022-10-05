import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { AgregarPrestamoComponent } from './components/agregar-prestamo/agregar-prestamo.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';
import { HomeComponent } from './components/home/home.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { LoginComponent } from './components/login/login.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [

  {path:'', component:LoginComponent},
  
  {path:'add', component:RegistroComponent},
  {path:'home', component:HomeComponent},
  {path:'agregarLibro', component:AgregarLibroComponent},
  {path:'listarLibro', component:ListarLibrosComponent},
  {path:'EditarLibro', component:EditarLibroComponent},
  {path:'prestamos', component:PrestamosComponent},
  {path: 'agregarPrestamo', component: AgregarPrestamoComponent},
  //{path:'/', component:RegistroComponent},

  {path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
