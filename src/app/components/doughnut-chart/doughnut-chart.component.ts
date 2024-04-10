import {Component, Input} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
})
export class DoughnutChartComponent {
  chart: any = {}

  update(): void {
    this.chart.update();
  }

  create(data: any, titulo: string) {
    this.chart = new Chart("chart", {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: titulo,
          }
        }
      },
    });
  }
}
