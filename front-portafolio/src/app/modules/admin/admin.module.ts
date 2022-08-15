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


@NgModule({
  declarations: [
    PrincipalAdminPageComponent,
    EditarDatosComponent
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
    CalendarModule    
  ]
})
export class AdminModule { }
