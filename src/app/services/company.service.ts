import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  contentService:any[] = [
    {
      front: 'IMAGEN DE PORTADA DE NOSOTROS',
      frontText: 'TEXTO DE REFERENCIA',
      mission: 'MISION DE LA EMPRESA',
      vision: 'VISION DE LA EMPRESA',
    }
  ]

  constructor() {
    console.log('funcionando servicio');
    
   }

   getContent(){
     return this.contentService;
   }
}
