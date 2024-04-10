import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import {PedidoItemListComponent} from "./components/pedido-item-list/pedido-item-list.component";
import {PedidoItemComponent} from "./components/pedido-item/pedido-item.component";
import {ItemComponent} from "./components/item/item.component";
import {ItemListComponent} from "./components/item-list/item-list.component";
import {InicioComponent} from "./components/inicio/inicio.component";
import {DoughnutChartComponent} from "./components/doughnut-chart/doughnut-chart.component";

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    PedidoListComponent,
    PedidoItemListComponent,
    PedidoItemComponent,
    ItemComponent,
    ItemListComponent,
    InicioComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
