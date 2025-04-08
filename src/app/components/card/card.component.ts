import { EmpleadosService } from './../../services/empleados.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() miEmpleado: Empleado | undefined;
  empleadosService= inject(EmpleadosService);
  @Output() deleteEmpleadoEmit: EventEmitter<boolean>= new EventEmitter();

  async deleteEmpleado(id:string | undefined){
    const res = confirm('¿Deseas borrar el usuario con id? ' + id);
    if(id && res === true){
      //LLAMAMOS AL SERVICIO A LA FUNCION REMOVE DEL SERVICIO
      let respuesta = await this.empleadosService.remove(id);
      if (respuesta._id){
        //RECARGO LA PAGINA PARA REINICIAR EL COMPONENTE.
        //window.location.href = '/dashboard/empleados'
        this.deleteEmpleadoEmit.emit(true);
      }
    }
  }
}
