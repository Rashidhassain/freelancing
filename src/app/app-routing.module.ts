import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { Header1Component } from './header1/header1.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
{path: 'header', component: HeaderComponent},
{path: 'main', component: MainComponent},
{path: 'header1', component: Header1Component},
{path: 'footer', component: FooterComponent},

{path: 'about', component: AboutComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
