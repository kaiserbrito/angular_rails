import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { Angular2TokenService } from "angular2-token";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
