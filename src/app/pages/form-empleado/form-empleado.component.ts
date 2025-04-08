import { EmpleadosService } from './../../services/empleados.service';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empleado } from '../../interfaces/empleado.interface';


@Component({
  selector: 'app-form-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './form-empleado.component.html',
  styleUrl: './form-empleado.component.css'
})


export class FormEmpleadoComponent {
  title= 'Registrar empleado'
  empleadoForm: FormGroup;
  empleadosService = inject(EmpleadosService)
  router = inject(Router);
  @Input() idEmpleado: string = '';

  constructor(){
    this.empleadoForm = new FormGroup({
      nombre: new FormControl("", []),
      apellidos: new FormControl("", []),
      email: new FormControl("", []),
      telefono: new FormControl("", []),
      departamento: new FormControl("", []),
      salario: new FormControl("", []),
    }, [])
  }

  async ngOnInit(){
    //SE QUE ESTOY CARGANDO ACTUALIZAR PORQUE RECIBO EL ID DEL EMPLADO
    if(this.idEmpleado){
      this.title = 'Actualizar empleado'
      let empleado: Empleado = await this.empleadosService.getById(this.idEmpleado);
      this.empleadoForm = new FormGroup({
        _id: new FormControl(empleado._id, []),
        nombre: new FormControl(empleado.nombre , []),
        apellidos: new FormControl(empleado.apellidos , []),
        email: new FormControl(empleado.email , []),
        telefono: new FormControl(empleado.telefono , []),
        departamento: new FormControl(empleado.departamento , []),
        salario: new FormControl(empleado.salario , []),
      }, [])


    }
  }

  async getDataForm(){
    try {
    if(this.empleadoForm.value._id) {
      let respuesta = await this.empleadosService.insert(this.empleadoForm.value);
      if (respuesta._id) {
        alert('se ha registrado correctamente');
        this.router.navigate(['/dashboard', 'empleados']);
      }
    }
    }catch (msg: any){
      Swal.fire({   
      title: 'Error!',   
      text: this.pintarErrores(msg.error),   
      icon: 'error',   
      confirmButtonText: 'Cool'})
    }
    }

  pintarErrores(arr: any[]) {
    let result = "";
    arr.forEach((error: any) => result += `<p class="fs-6 text-danger">${error.field}: ${error.message}</p>`);
    return result;
  }
}



