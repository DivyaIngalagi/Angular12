import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberListComponentComponent } from './number-list-component/number-list-component.component';
import { NumberComponentComponent } from './number-component/number-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberListComponentComponent,
    NumberComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
