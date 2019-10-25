import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  content:any[] = [];

  constructor(private _servicio: CompanyService) { 
    this.content = _servicio.getContent();
  }

  ngOnInit() {
  }
  
}
