import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { SucessComponent } from './views/sucess/sucess.component';
import { TableComponent } from './components/table/table.component';
import { DeleteComponent } from './views/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    SucessComponent,
    TableComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
