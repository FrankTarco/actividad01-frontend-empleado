import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { Pais } from 'src/app/models/pais.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {

lstPaises:Pais[] = [];

objEmpleado:Empleado={
    nombres:"",
    fechaNacimiento:"",
    pais:{
      idPais:-1
    }
}

constructor(private empleadoService:EmpleadoService,private paisService:PaisService){

  this.paisService.listaPaises().subscribe(
    x => this.lstPaises = x
  )
 
}

registrar(){
  this.empleadoService.registrarEmpleado(this.objEmpleado).subscribe(
    x => Swal.fire({icon: 'info',title: 'Resultado del Registro - Tarco',text: x.errores}) 
  )
  this.limpieza();

}

limpieza(){
  this.objEmpleado.nombres='';
  this.objEmpleado.fechaNacimiento='';
  this.objEmpleado.pais!.idPais=-1;
}



}
