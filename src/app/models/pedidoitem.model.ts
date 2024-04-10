import {Item} from "./item.model";
import {Pedido} from "./pedido.model";

export class PedidoItem {
  id: string;
  item?: Item;
  pedido?: Pedido;
  quantidade?: bigint;
  valor?: number;
}
