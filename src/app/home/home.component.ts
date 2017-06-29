import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HomeService } from './home.service';   // 引入HomeService 服务
import { MallService } from './home.mall.service';  // 引入MallService 服务

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService, MallService]  //
})
export class HomeComponent implements OnInit {
  head = 'homePage';
  list = [];
  mall;
  constructor(
    public router: Router,
    public http: Http,
    private homeService: HomeService,
    private mallService: MallService
  ) { }

  ngOnInit() {
    this.getList();
    this.getMall();
  }
  pushTo (route) {
    this.router.navigateByUrl(route);
  }
  public getList () {
    this.homeService.getClassify().subscribe(res => {this.list = res; });
  }
  public getMall() {
    this.mallService.getMall().subscribe( res => {this.mall = res; });
  }
}
