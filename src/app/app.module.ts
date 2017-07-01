import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeadModule } from './head/head.module';
import { AppComponent } from './app.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';

import { AppRouter } from './app.routers';
import { HomeDetailComponent } from './home-detail/home-detail.component';


import './../index.js';
import './../styles.css';

@NgModule({
  declarations: [
    AppComponent,
    TabBarComponent,
    HomeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    HeadModule,
    RouterModule.forRoot(AppRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
