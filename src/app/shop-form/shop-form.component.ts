import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss']
})
export class ShopFormComponent implements OnInit {

  newShopForm!: FormGroup;

  @Output() formSubmitted = new EventEmitter<any>(); // Emisión del formulario

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.newShopForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      tercero: ['', [Validators.required, Validators.minLength(5)]],
      sucursal: ['', [Validators.required, Validators.minLength(5)]],
      nit: ['', [Validators.required, Validators.minLength(5)]],
      tipo: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      invioce: '',
      total: ['', [Validators.required]],
      date: ['', [Validators.required]],
      acciones: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.newShopForm.valid) {
      console.log('Formulario enviado:', this.newShopForm.value);
      this.formSubmitted.emit(this.newShopForm.value);  // Emitir los datos hacia el componente principal
    } else {
      console.error('Formulario inválido');
    }
  }
}
