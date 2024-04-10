import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import {PedidoItemComponent} from "./components/pedido-item/pedido-item.component";
import {ItemListComponent} from "./components/item-list/item-list.component";
import {ItemComponent} from "./components/item/item.component";
import {InicioComponent} from "./components/inicio/inicio.component";

const routes: Routes = [
  { path: 'pedido/lista', component: PedidoListComponent },
  { path: 'pedido/:id', component: PedidoComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'item/lista', component: ItemListComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'item', component: ItemComponent },
  { path: 'pedido-item/:id', component: PedidoItemComponent },
  { path: 'pedido-item', component: PedidoItemComponent },
  { path: '', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
