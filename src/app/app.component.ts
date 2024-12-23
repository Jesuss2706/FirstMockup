import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  type = 'Purchases';

  purchases = [
    {
      third: 'Mi empresa',
      sucursal: 'Bogota',
      nit: '12345678',
      type: 'Bar',
      state: 'Finalizado',
      invioce: '12345678',
      total: '90000',
      date: '2024-01-11',
    },
    {
      third: 'Qbano',
      sucursal: 'Cali',
      nit: '1534234342',
      type: 'Restaurant',
      state: 'En proceso',
      invioce: '6566654',
      total: '25000',
      date: '2022-12-23',
    },
  ];

  purchase={
    third:'',
    brandOffice:'',
    nit:'',
    type:'',
    state:'',
    invioce:'',
    total:'',
    date:'',
  }

  onShopFormSubmit(purchase: any) {
    this.purchases.push(purchase);
  }
}
