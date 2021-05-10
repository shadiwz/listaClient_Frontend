import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientsComponent } from './lista-clients/lista-clients.component';
import { InscreverClientsComponent } from './inscrever-clients/inscrever-clients.component'

const routes: Routes = [
  { path: 'lista-clients', component: ListaClientsComponent },
  { path: '', component: ListaClientsComponent },
  { path: 'inscrever-clients', component: InscreverClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
