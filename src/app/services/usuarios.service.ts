import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Result } from '../interfaces/result.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url:string = 'https://crm-empleados.onrender.com/api/usuarios';
  httpClient = inject(HttpClient);

  login(usuario: Usuario) {
    return lastValueFrom(
      this.httpClient.post<Result>(`${this.url}/login`, usuario)
    )

  }

  constructor() { }
}
