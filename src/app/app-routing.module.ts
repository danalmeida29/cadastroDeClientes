import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPFComponent } from './pages/formulario-pf/formulario-pf.component';
import { FormularioPJComponent } from './pages/formulario-pj/formulario-pj.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';

const routes: Routes = [
  {path:'', component: FormulariosComponent },
  {path:'listaDecliente', component: ListClientesComponent},
  {path:'pf',component: FormularioPFComponent},
  {path:'pj', component: FormularioPJComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
