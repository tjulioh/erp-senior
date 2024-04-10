import {Component, OnInit, ViewChild} from '@angular/core';
import {PedidoService} from '../../services/service';
import {DoughnutChartComponent} from "../doughnut-chart/doughnut-chart.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {
  data: any = {}

  @ViewChild(DoughnutChartComponent) private doughnutChartComponent: DoughnutChartComponent;

  constructor(private service: PedidoService) {
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.service.getInfo().subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
        this.doughnutChartComponent.create({
          labels: ['Aberto', 'Fechado'],
          datasets: [
            {
              data: [this.data.quantidadePedidosAbertos, this.data.quantidadePedidosFechados],
            }
          ]
        }, 'Total de pedidos: ' + this.data.quantidadePedidos);
      },
      error: (e) => console.error(e)
    });
  }

}
