import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './frontend/pagina404/pagina404.component';
import { LoginComponent } from './frontend/login/login.component';

const routes: Routes = [
  {path: '**', component: Pagina404Component},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "login", component: LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
