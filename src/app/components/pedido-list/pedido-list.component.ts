import {Component, OnInit} from '@angular/core';
import {PedidoService} from '../../services/service';
import {Pagina} from "../../models/pagina.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
})
export class PedidoListComponent implements OnInit {
  pagina: Pagina = {
    total: 0,
    limite: 0,
    conteudo: [],
    proximo: false,
    atual: 0
  };
  paginacao = {
    offset: 0,
    limit: 5,
    atual: 0,
    ultima: 0
  };
  descricao = '';

  constructor(private service: PedidoService, private router: Router) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(pagina?: number): void {
    this.paginacao.atual = pagina ?? this.paginacao.atual;
    this.service.getAll({
      filter: this.descricao ? `numero=${this.descricao}` : '',
      offset: this.paginacao.atual,
      limit: this.paginacao.limit
    }).subscribe({
      next: (data) => {
        this.pagina = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  delete(id: string): void {
    this.service.delete(id).subscribe({
      next: (res) => {
        console.log(res);
        this.search()
      },
      error: (e) => console.error(e)
    });
  }

  edit(id: string) {
    this.router.navigate([`pedido/${id}`]);
  }
}
