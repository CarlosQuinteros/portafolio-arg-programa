import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/shared/pages/page-not-found.component';
import { LoginPageComponent } from './pages/login-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo:'login'},
      {path:'login', component: LoginPageComponent},
      {path:'*', component:PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
