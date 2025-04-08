import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../interfaces/empleado.interface';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-lista-empleados',
  imports: [CardComponent],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {
  //INYECTAR EL SERVICIO DE EMPLEADOS
  empleadosService = inject(EmpleadosService);
  //ARRAY DE EMPLEADOS DONDE GUARDAR LOS EMPLEADOS QUE ME DA EL SERVICIO
  arrEmpleados: Empleado[] = [];
empleado: any;
  

  async ngOnInit(){
    this.getData()
  }

  async onDelete(event:boolean){
    this.getData()
  }

  async getData(){
    try {
      this.arrEmpleados = await this.empleadosService.getAll();
    } catch (msg:any) {
      alert (msg.error.error)
    }  
  }
}
