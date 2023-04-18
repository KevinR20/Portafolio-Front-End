import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontend/header/header.component';
import { AcercadeComponent } from './frontend/acercade/acercade.component';
import { EducacionComponent } from './frontend/educacion/educacion.component';
import { ExperienciaComponent } from './frontend/experiencia/experiencia.component';
import { LoginComponent } from './frontend/login/login.component';
import { ProyectosComponent } from './frontend/proyectos/proyectos.component';
import { SkillsComponent } from './frontend/skills/skills.component';
import { Pagina404Component } from './frontend/pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    LoginComponent,
    ProyectosComponent,
    SkillsComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
