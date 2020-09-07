//my-products component.ts - Type Script file that contains code to render products ordered by customer.

//including the required files and services
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

//component specific details 
@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})

//exporting settings component
export class MyProductsComponent implements OnInit {

  products: any;

  constructor(
    private data: DataService,
    private rest: RestApiService
  ) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:3030/api/seller/products'
      );
      data['success']
        ? (this.products = data['products'])
        : this.data.error(data['message']);
    } catch(error) {
      this.data.error(error['message']);
    }
  }

}
