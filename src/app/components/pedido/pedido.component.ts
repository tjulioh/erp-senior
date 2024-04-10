import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pedido} from '../../models/pedido.model';
import {PedidoService} from '../../services/service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
})
export class PedidoComponent implements OnInit {
  @Input() current: Pedido = {};

  mensagem: string = '';

  constructor(
    private service: PedidoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.get(this.route.snapshot.params['id']);
    }
  }

  get(id: string): void {
    this.service.get(id).subscribe({
      next: (data) => {
        this.current = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  update(): void {
    this.service
      .update(this.current)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['pedido/lista']);
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
        this.router.navigate(['pedido/lista']);
      },
      error: (e) => console.error(e)
    });
  }

  create(): void {
    this.service.create(this.current).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([`pedido/${res.id}`]);
      },
      error: (e) => {
        console.error(e)
        this.mensagem = e.error.mensagem
      }
    });
  }
}
