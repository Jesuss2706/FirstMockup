import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.scss']
})
export class ComprasListComponent implements OnInit {

  @Input() purchases: any;


  constructor() { }

  ngOnInit(): void {
  }

}
