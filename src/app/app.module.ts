import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CryptoCallComponent } from './crypto-call/crypto-call.component';
import { CryptoCallRowComponent } from './crypto-call/crypto-call-row/crypto-call-row.component';
import { HttpService } from './Services/http.service';



@NgModule({
  declarations: [
    AppComponent,
    CryptoCallComponent,
    CryptoCallRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
