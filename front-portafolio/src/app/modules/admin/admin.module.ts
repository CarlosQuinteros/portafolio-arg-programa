import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import { MessageModule } from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {GalleriaModule} from 'primeng/galleria';
import {TabViewModule} from 'primeng/tabview';
import { PrincipalAdminPageComponent } from './pages/principal/principal-admin-page.component';
import { EditarDatosComponent } from './components/datos/editar-datos.component';
import {CalendarModule} from 'primeng/calendar';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { ListaHabilidadesComponent } from './components/habilidades/lista/lista-habilidades.component';
import { CrearHabilidadComponent } from './components/habilidades/crear/crear-habilidad.component';
import { RippleModule } from 'primeng/ripple';
import { EditarHabilidadComponent } from './components/habilidades/editar/editar-habilidad.component';
import { ListaEducacionesComponent } from './components/educaciones/lista/lista-educaciones.component';
import { CrearEducacionComponent } from './components/educaciones/crear/crear-educacion.component';
import { EditarEducacionComponent } from './components/educaciones/editar/editar-educacion.component';
import { ListaExperienciasComponent } from './components/experiencias/lista/lista-experiencias.component';
import { CrearExperienciaComponent } from './components/experiencias/crear/crear-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencias/editar/editar-experiencia.component';
import { ListaProyectosComponent } from './components/proyectos/lista/lista-proyectos.component';
import { CrearProyectoComponent } from './components/proyectos/crear/crear-proyecto.component';
import { EditarProyectoComponent } from './components/proyectos/editar/editar-proyecto.component';
import { ListaImagenesProyectoComponent } from './components/proyectos/imagenes/lista/lista-imagenes-proyecto.component';
import { CrearImagenProyectoComponent } from './components/proyectos/imagenes/crear/crear-imagen-proyecto.component';
import { EditarImagenProyectoComponent } from './components/proyectos/imagenes/editar/editar-imagen-proyecto.component';


@NgModule({
  declarations: [
    PrincipalAdminPageComponent,
    EditarDatosComponent,
    ListaHabilidadesComponent,
    CrearHabilidadComponent,
    EditarHabilidadComponent,
    ListaEducacionesComponent,
    CrearEducacionComponent,
    EditarEducacionComponent,
    ListaExperienciasComponent,
    CrearExperienciaComponent,
    EditarExperienciaComponent,
    ListaProyectosComponent,
    CrearProyectoComponent,
    EditarProyectoComponent,
    ListaImagenesProyectoComponent,
    CrearImagenProyectoComponent,
    EditarImagenProyectoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    DynamicDialogModule,
    GalleriaModule,
    SharedModule,
    TabViewModule,
    CalendarModule,
    RippleModule,
    AvatarGroupModule,
    AvatarModule
  ],
  entryComponents:[
    CrearHabilidadComponent,
    EditarHabilidadComponent,
    CrearEducacionComponent,
    EditarEducacionComponent,
    CrearExperienciaComponent,
    EditarExperienciaComponent,
    CrearProyectoComponent,
    EditarProyectoComponent,
    CrearImagenProyectoComponent,
    EditarImagenProyectoComponent
  ]
})
export class AdminModule { }
