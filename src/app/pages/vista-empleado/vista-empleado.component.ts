import { Component, inject, Input } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-vista-empleado',
  imports: [],
  templateUrl: './vista-empleado.component.html',
  styleUrl: './vista-empleado.component.css'
})
export class VistaEmpleadoComponent {
  @Input() idEmpleado: any; string = "";
  //inyectar el servicio
  empleadosService = inject(EmpleadosService);
  //crear una propiedad para almacenar al empleado
  empleado: Empleado | undefined;

  async ngOnInit() {
    try{
      this.empleado = await this.empleadosService.getById(this.idEmpleado)
    }catch (msg: any){
      alert (msg.error.error)
    }
  }
}
