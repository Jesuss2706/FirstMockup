import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() type!: string; // Confirmamos que el valor será proporcionado desde el componente padre

  constructor() { }

  ngOnInit(): void {
  }
}
