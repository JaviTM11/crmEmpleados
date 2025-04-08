import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  router = inject(Router);
  logOut(){
    //borrar del localstorage el tokenç
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
