import { APP_BASE_HREF } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutUsComponent } from './aboutus.component';
import { PricingComponent } from './pricing.component';

const appRoutes: Routes = [
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AboutUsComponent,
    PricingComponent
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})

export class AppModule { }
