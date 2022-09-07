import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './historia/historia.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ClasesComponent } from './clases/clases.component';
import { InicioComponent } from './inicio/inicio.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    HistoriaComponent,
    EventosComponent,
    ContactoComponent,
    ClasesComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule
  ],
  exports:[
    HistoriaComponent,
    ContactoComponent,
    EventosComponent,
    ClasesComponent,
    InicioComponent
  ]
})
export class PagesModule { }
