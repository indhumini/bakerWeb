import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import{NgbCarouselConfig} from'@ng-bootstrap/ng-bootstrap';
import * as html2pdf from 'html2pdf.js';
import { interval } from 'rxjs';

@Component({
  selector: 'app-users-report',
  templateUrl: './users-report.component.html',
  styleUrls: ['./users-report.component.scss']
})
export class UsersReportComponent implements OnInit {
  users: any;

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
        'http://localhost:3030/api/accounts/users'
      );
      data['success']
        ? (this.users = data['users'])
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
      jsPDF:{orientation:'landscape'}
    }
    const element:Element=document.getElementById('table');

    html2pdf()
    .from(element)
    .set(options)
    .save()
  }
}
