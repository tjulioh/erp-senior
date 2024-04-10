import {Component, Input} from '@angular/core';
import {PedidoItemService} from '../../services/service';
import {Router} from "@angular/router";
import {Pedido} from "../../models/pedido.model";
import {PedidoItem} from "../../models/pedidoitem.model";
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-pedido-item-list',
  templateUrl: './pedido-item-list.component.html',
})
export class PedidoItemListComponent {
  @Input() current: Pedido = {};

  currentPedidoItem: PedidoItem = {
    id: '',
    pedido: {
      id: ''
    }
  }
  currentModal : Modal;

  constructor(private service: PedidoItemService, private router: Router) {
  }

  open(item?: PedidoItem) {
    if (!item) {
      item = new PedidoItem()
      item.quantidade = undefined
      item.valor = undefined
    }
    item.pedido = {id: this.current.id, descricao: this.current.descricao}
    this.currentPedidoItem = item
    this.currentModal = new Modal(document.getElementById('pedido-item')!)
    this.currentModal.show()
  }

  delete(id: string): void {
    this.service.delete(id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([`pedido/${this.current.id}`]);
      },
      error: (e) => console.error(e)
    });
  }
}
