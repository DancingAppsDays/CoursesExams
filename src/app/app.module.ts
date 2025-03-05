import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListacoursesComponent } from './component/listacourses/listacourses.component';
import { Quiz1Component } from './component/quiz1/quiz1.component';
import { ListaestudiantesComponent } from './component/admin/listaestudiantes/listaestudiantes.component';
import { FilterpipePipe } from './service/filterpipe.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

//import { BaseChartDirective, withDefaultRegisterables } from 'ng2-charts';
//import { provideCharts, } from 'ng2-charts';
//import { Chart } from 'chart.js';

//import { ToastProgressComponent } from './component/toast-progress/toast-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    ListacoursesComponent,
    Quiz1Component,
    ListaestudiantesComponent,
    FilterpipePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
   
    NgxPaginationModule,
    FormsModule,
    //BaseChartDirective,
  ],
  providers: [
   //CookieService,
   // provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
