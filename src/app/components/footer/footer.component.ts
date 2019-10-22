import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  headers = ['TIPO','NOMBRE','EDAD'];

  customers: any = [
    {tipo: 'Ingeniero', nombre: 'Jhon', edad: 24},
    {tipo: 'Fiscal', nombre: 'Edith', edad: 25},
    {tipo: 'Medico', nombre: 'Leo', edad: 21},
    {tipo: 'Gerente', nombre: 'Michael', edad: 23},
    {tipo: 'RR.HH.', nombre: 'Erika', edad: 22},
  ]

  constructor() { }

  ngOnInit() {
  }

}
