import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';


@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    Step1Component,
    Step2Component,
    Step3Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
