import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from './pages/clases/clases.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'',component:InicioComponent},
  {path:'clases',component:ClasesComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'eventos',component:EventosComponent},
  {path:'historia',component:HistoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
