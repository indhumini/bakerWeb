import { Component, OnInit } from '@angular/core';
import{NgbCarouselConfig} from'@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  

  constructor(config:NgbCarouselConfig) { 
    config.interval=2000;
    config.wrap=true;
    config.keyboard=false;
    config.pauseOnHover=false;
  }

  ngOnInit(): void {
  }

}
