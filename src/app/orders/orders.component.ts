import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  download(){
    const options={
      name:'output.pdf',
      image:{type:'jpeg'},
      html2canvas:{},
      jsPDF:{orientation:'landscape'}
    }
    const element:Element=document.getElementById('table');

    html2pdf()
    .from(element)
    .set(options)
    .save()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
