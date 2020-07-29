import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent implements OnInit {
  public barChartOptions={
    scaleShowVerticalLines :false,
    responsive: true
  }
  public barChartLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [12,62,34,65,86,45,24,54,83], label:'Previous Year' , backgroundColor:'hsl(0, 0%, 40%)', hoverBackgroundColor:'hsl(0, 0%, 10%) '},
    {data: [43,12,34,76,23,67,23,78,45], label:'This Year',backgroundColor:'HSL(171, 100%, 50%)',hoverBackgroundColor:'HSL(171, 100%, 30%) '}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
