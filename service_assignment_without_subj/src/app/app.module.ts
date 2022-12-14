import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiverComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
