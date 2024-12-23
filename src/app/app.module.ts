import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { ComprasListComponent } from './compras-list/compras-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ShopFormComponent,
    ComprasListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
