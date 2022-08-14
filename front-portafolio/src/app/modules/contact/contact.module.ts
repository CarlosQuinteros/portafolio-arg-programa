import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


@NgModule({
  declarations: [
    ContactFormComponent,
    ContactInformationComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    CardModule
  ]
})
export class ContactModule { }
