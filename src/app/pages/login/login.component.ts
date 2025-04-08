import { UsuariosService } from './../../services/usuarios.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Result } from '../../interfaces/result.interface';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuariosService = inject(UsuariosService);
 
  router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', []),
  });



  async getDataForm() {
    try {
      let respuesta: Result = await this.usuariosService.login(this.loginForm.value);
      if (respuesta.token) {
        // LocalStorage
        // getItem('nombre')=> obtener datos del localStorage
        // setItem('nombre', 'valor')=> guardar datos en el localStorage
        // removeItem('nombre')=> eliminar datos del localStorage
        // clear() => eliminar todos los datos del localStorage
        localStorage.setItem('token', respuesta.token);
        this.router.navigate(['/dashboard']);
        
      }
    } catch (error: any) {
      alert(error.error.error);
    }
    
  }
}
