/*import { Component, OnInit } from '@angular/core';
import {element} from 'protractor';
import {Subscription} from 'rxjs';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent implements OnInit {
  
  searchTerm : string;
  sales: Sales[] = [];
  isLoading= false;
  userIsAuthenticated = false;
   salesSubs: Subscription;
   authStatusSub: Subscription;
   isHidden: boolean = true;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    this.salesInteractionService.getSales();
    this.salesSubs = this.salesInteractionService.getSalesUpdateListener()
      .subscribe((posts: Sales[]) => {
        this.isLoading = false;
        this.sales = posts;
      });

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  downloard(){
    const options ={
      name: 'output.pdf',
      image: {type: 'jpeg'},
      html2canvas:{},
      jsPDF: {orientation: 'portrait'},
      pagebreak: { mode: 'avoid-all', before: '#page2el' }
    }
    const element:Element = document.getElementById('table')

    html2pdf()
            .from(element)
            .set(options)
            .save()
  }

}*/
