import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let token = localStorage.getItem('token');
  if (!token) {
    // Si no hay token, redirigir al login
    router.navigate(['/login']);
    return false;
  }   
    return true;
};
