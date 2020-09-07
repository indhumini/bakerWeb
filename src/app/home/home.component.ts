//Homecomponent.ts - Type Script file that contains code to render home page.

//including the required files and services
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import{NgbCarouselConfig} from'@ng-bootstrap/ng-bootstrap';
//import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;

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
        'http://localhost:3030/api/products'
      );
      data['success']
        ? (this.products = data['products'])
        : this.data.error('Could not fetch products.');
    } catch(error) {
      this.data.error(error['message']);
    }
  }

}
