import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

//Servicio
import { EquipoService } from './equipo.service';


@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
