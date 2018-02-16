/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Ng2EditModule }  from 'ng2edit';

@Component({
  selector: 'app',
  template: `<ng2edit url="/exmaple" name="nameOfField" value="valueOfdataToBeUpdated"
            (onSuccess)="successFunction($event);"
            (onError)="errorFunction($event);"></ng2edit>`
})
class AppComponent {

  onSuccess(data: any) {
    console.log(data);
  }

  onError(error: any) {
    console.log(error);
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, Ng2EditModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
