import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaestudiantesComponent } from './component/admin/listaestudiantes/listaestudiantes.component';
import { ListacoursesComponent } from './component/listacourses/listacourses.component';

const routes: Routes = [

  {path: '', redirectTo: '/listaestudiantes', pathMatch: 'full'},
  {path: 'listaestudiantes', component: ListaestudiantesComponent },

  {path: 'listacourses', component: ListacoursesComponent},
  { path: '', redirectTo: '/listaestudiantes', pathMatch: 'full' },
  { path: '**', redirectTo: '/listaestudiantes', pathMatch: 'full' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
