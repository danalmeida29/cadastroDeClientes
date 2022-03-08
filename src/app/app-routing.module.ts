import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPFComponent } from './pages/formulario-pf/formulario-pf.component';
import { FormularioPJComponent } from './pages/formulario-pj/formulario-pj.component';
import { DailogComponent } from './pages/list-clientes/dailog/dailog.component';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';

const routes: Routes = [
  {path:'', component: ListClientesComponent },
  {path:'pf',component: FormularioPFComponent},
  {path:'pj', component: FormularioPJComponent},
  {path:'editarPf/:id',component: FormularioPFComponent},
  {path:'editarPj/:id',component: FormularioPJComponent},
  {path:'escolha', component: DailogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
