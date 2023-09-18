import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';

const routes: Routes = [
  { path:"addModalidad", component: AddModalidadComponent },
  { path:"addEmpleado", component: AddEmpleadoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
