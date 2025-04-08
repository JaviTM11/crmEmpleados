import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';
import { FormEmpleadoComponent } from './pages/form-empleado/form-empleado.component';
import { VistaEmpleadoComponent } from './pages/vista-empleado/vista-empleado.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    {
      path: "dashboard", component: DashboardComponent, canActivate: [loginGuard], children: [
        { path: "", pathMatch: 'full', redirectTo: 'empleados' },
        { path: "empleados", component: ListaEmpleadosComponent },
        { path: "nuevo", component: FormEmpleadoComponent },
        { path: "update/:idEmpleado", component: FormEmpleadoComponent },
        { path: "empleado/:idEmpleado", component: VistaEmpleadoComponent }
      ]
    },
    { path: "**", redirectTo: "login" }
  ];
