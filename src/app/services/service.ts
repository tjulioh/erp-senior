import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pedido} from "../models/pedido.model";
import {Pagina} from "../models/pagina.model";
import {PedidoItem} from "../models/pedidoitem.model";
import {Item} from "../models/item.model";
import {environment} from "../../environments/environment";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export abstract class Service<T> {
  protected constructor(protected http: HttpClient, protected path: string) {
  }

  getAll({filter, offset = 0, limit = 20}: { filter?: string, offset?: number, limit?: number }): Observable<Pagina> {
    return this.http.get<Pagina>(`${apiUrl}/${this.path}${filter ? '?' + filter : ''}`, {
      params: {
        offset: offset,
        limit: limit
      }
    });
  }

  get(id: any): Observable<T> {
    return this.http.get<T>(`${apiUrl}/${this.path}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/${this.path}`, data);
  }

  update(data: any ): Observable<any> {
    return this.http.put(`${apiUrl}/${this.path}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${apiUrl}/${this.path}/${id}`);
  }
}

@Injectable({
  providedIn: 'root',
})
export class PedidoService extends Service<Pedido> {
  constructor(http: HttpClient) {
    super(http, "pedido");
  }

  getInfo() {
    return this.http.get<Object>(`${apiUrl}/${this.path}/info`);
  }
}

@Injectable({
  providedIn: 'root',
})
export class PedidoItemService extends Service<PedidoItem> {
  constructor(http: HttpClient) {
    super(http, "pedido-item");
  }
}

@Injectable({
  providedIn: 'root',
})
export class ItemService extends Service<Item> {
  constructor(http: HttpClient) {
    super(http, "item");
  }
}
