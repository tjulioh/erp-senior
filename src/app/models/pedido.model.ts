import {PedidoItem} from "./pedidoitem.model";

export class Pedido {
  id?: string;
  descricao?: string;
  numero?: number;
  criado?: string;
  situacao?: string;
  desconto?: number;
  itens?: [PedidoItem];
  valorTotalDesconto?: number;
  valorTotalComDesconto?: number;
  valorTotal?: number;
}
