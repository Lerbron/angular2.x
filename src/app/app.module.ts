import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { MoreComponent } from './more/more.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { HeadComponent } from './head/head.component';

import { AppRouter } from './app.routers';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import '../index.js';
import './../styles.css';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    MoreComponent,
    TabBarComponent,
    HeadComponent,
    HomeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forRoot(AppRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
