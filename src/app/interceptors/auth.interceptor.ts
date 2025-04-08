import { HttpInterceptorFn } from '@angular/common/http';

//PARA USAR ESTE INTERCEPTOR EN LA PETICIONES HAY QUE CONFIGURAR EL PROVIDE HTTPCLIENT DENTRO DEL APP.CONFIG
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('paso por el interceptor')
  //AÑADIR A LA REQUEST LA CABECERA DE AUTORIZACIÓN
  const cloneRequest = req.clone({
    setHeaders: {
      'Authorization': localStorage.getItem('token') || '',
      'Content-type': 'application/json'
    }
  })
  return next(cloneRequest);
};
