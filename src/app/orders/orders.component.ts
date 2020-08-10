import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import{NgbCarouselConfig} from'@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  
  allOrders: any;

  constructor(
    private rest: RestApiService,
    private data: DataService,
    config:NgbCarouselConfig
  ) {
    config.interval=2000;
    config.wrap=true;
    config.keyboard=false;
    config.pauseOnHover=false;
   }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:3030/api/accounts/all-orders'
      );
      data['success']
        ? (this.allOrders = data['allOrders'])
        : this.data.error('Could not fetch users.');
    } catch(error) {
      this.data.error(error['message']);
    }
  }

  download(){
    const options={
      name:'output.pdf',
      image:{type:'jpeg'},
      html2canvas:{},
      jsPDF: {orientation: 'portrait'}
    }
    const element:Element=document.getElementById('table');

    html2pdf()
    .from(element)
    .set(options)
    .save()
  }

}
