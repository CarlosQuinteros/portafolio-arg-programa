import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { ListaImagenesProyectoComponent } from './components/proyectos/imagenes/lista/lista-imagenes-proyecto.component';
import { PrincipalAdminPageComponent } from './pages/principal/principal-admin-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    children: [
      {path: '', component: PrincipalAdminPageComponent},
      {path: 'proyectos/:id/imagenes', component: ListaImagenesProyectoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
