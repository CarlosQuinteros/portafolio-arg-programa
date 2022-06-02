import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PasswordModule } from 'primeng/password';
import { LoginPageComponent } from './pages/login-page.component'
import { ButtonModule } from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import { SharedModule } from 'src/app/shared/shared.module';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
    RippleModule,
    SharedModule
  ]
})
export class AuthModule { }
