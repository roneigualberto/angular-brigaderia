import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProdutoListComponent} from './produto/produto-list/produto-list.component';
import {ProdutoFormComponent} from './produto/produto-form/produto-form.component';

import {ClienteListComponent} from './cliente/cliente-list/cliente-list.component';
import {ClienteFormComponent} from './cliente/cliente-form/cliente-form.component';

import {VendaListComponent} from './venda/venda-list/venda-list.component';
import {VendaFormComponent} from './venda/venda-form/venda-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/produto', pathMatch: 'full'},
  {path:'produto', component: ProdutoListComponent},
  {path:'produto/form', component: ProdutoFormComponent},
  {path:'cliente', component: ClienteListComponent},
  {path:'cliente/form', component: ClienteFormComponent},
  {path:'venda', component: VendaListComponent},
  {path:'venda/form', component: VendaFormComponent},
  {path: '**', redirectTo: '/produto', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
