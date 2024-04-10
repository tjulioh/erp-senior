import {Component, Input, OnInit} from '@angular/core';
import {ItemService, PedidoItemService} from '../../services/service';
import {PedidoItem} from "../../models/pedidoitem.model";
import {Modal} from "bootstrap";
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-pedido-item',
  templateUrl: './pedido-item.component.html',
})
export class PedidoItemComponent implements OnInit {
  @Input() current: PedidoItem = {
    id: '',
    item: {
      id: ''
    },
    pedido: {
      id: ''
    }
  };
  @Input() currentModal : Modal;

  mensagem: string = '';

  itens : Item[];

  constructor(
    private service: PedidoItemService,
    private serviceItem: ItemService,
  ) {
  }

  ngOnInit(): void {
    this.getItens()
  }

   getItens() {
    this.serviceItem.getAll({}).subscribe({
      next: (data) => {
        this.itens = data.conteudo;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  update(): void {
    console.log(this.current)
    this.service
      .update(this.current)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentModal.hide()
          location.reload()
        },
        error: (e) => {
          console.error(e)
          this.mensagem = e.error.mensagem
        }
      });
  }

  delete(): void {
    this.service.delete(this.current.id).subscribe({
      next: (res) => {
        console.log(res);
        this.currentModal.hide()
        location.reload()
      },
      error: (e) => console.error(e)
    });
  }

  create(): void {
    this.service.create(this.current).subscribe({
      next: (res) => {
        console.log(res);
        this.currentModal.hide()
        location.reload()
      },
      error: (e) => {
        console.error(e)
        this.mensagem = e.error.mensagem
      }
    });
  }
}
