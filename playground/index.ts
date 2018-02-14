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
  template: `<ng2edit></ng2edit>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, Ng2EditModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
