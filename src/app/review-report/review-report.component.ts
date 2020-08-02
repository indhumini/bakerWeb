import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-review-report',
  templateUrl: './review-report.component.html',
  styleUrls: ['./review-report.component.scss']
})
export class ReviewReportComponent implements OnInit {

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
