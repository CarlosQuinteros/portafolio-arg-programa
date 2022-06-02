import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortadaComponent } from './components/portada/portada.component';
import { HomePageComponent } from './pages/home/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children:[
      {
        path: 'portada',
        component: PortadaComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
