import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../../services/service';
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  @Input() current: Item = {ativo: true};

  mensagem: string = '';
  tipos = ['SERVICO', 'PRODUTO'];

  constructor(
    private service: ItemService,
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
          this.router.navigate(['item/lista']);
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
        this.router.navigate(['item/lista']);
      },
      error: (e) => console.error(e)
    });
  }

  create(): void {
    this.service.create(this.current).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([`item/${res.id}`]);
      },
      error: (e) => {
        console.error(e)
        this.mensagem = e.error.mensagem
      }
    });
  }
}
