
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  //PARA HACER UNA PETICION AL SERVICIO, NECESITAMOS: url/endpoint y httpClient (provideHttpClient app.config)
  private url:string = 'https://crm-empleados.onrender.com/api/empleados'
  httpClient= inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Empleado[]>(this.url)
    )
  }

  remove(id:string){
    return lastValueFrom(
      this.httpClient.delete<Empleado>(`${this.url}/${id}`)
    )
  }

  getById(id:string){
    return lastValueFrom(
      this.httpClient.get<Empleado>(`${this.url}/${id}`)
    )
  }

  insert(empleado: Empleado) {
    return lastValueFrom(
      this.httpClient.post<Empleado>(this.url, empleado)
    )
  }

  update(empleado: Empleado) {
    let {_id, ...restoempleado} = empleado
    return lastValueFrom(
      this.httpClient.put<Empleado>(`${this.url}/${_id}`, restoempleado)
    )
  }

  constructor() { }
}
