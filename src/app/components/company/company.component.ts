import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  content:any[] = [];

  constructor(private serviceContent: CompanyService) { 
  }
  
  ngOnInit() {
    this.getContentData();
  }

  getContentData(): void{
    this.serviceContent.getContent()
      .subscribe(content => this.content = content);
  }
}
