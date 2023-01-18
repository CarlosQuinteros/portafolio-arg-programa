import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { ButtonModule } from 'primeng/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {MegaMenuModule} from 'primeng/megamenu';
import { FooterComponent } from './components/footer/footer.component';
import {TabViewModule} from 'primeng/tabview';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { CardSekeletonComponent } from './components/skeleton-card/card-sekeleton/card-sekeleton.component';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavBarComponent,
    FooterComponent,
    CardSekeletonComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    MegaMenuModule,
    TabViewModule,
    RippleModule,
    DividerModule,
    TooltipModule,
    SkeletonModule      
  ],
  exports: [
    PageNotFoundComponent,
    NavBarComponent,
    FooterComponent,
    CardSekeletonComponent
  ]
})
export class SharedModule { }
