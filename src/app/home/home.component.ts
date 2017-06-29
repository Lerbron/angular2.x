import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HomeService } from './home.service';
import { MallService } from './home.mall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService, MallService]  //  引入服务
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
  // 将服务注入到组件中
  ngOnInit() {
    this.getList();
    this.getMall();
  }
  pushTo (route) {
    this.router.navigateByUrl(route);     // 通过router.navigateByUrl()进行路由切换
  }
  public getList () {
    this.homeService.getClassify().subscribe(res => {this.list = res; }); // http 返回的是一个可观察的对象，通过subscribe()进行链式调用操作
  }
  public getMall() {
    this.mallService.getMall().subscribe( res => {this.mall = res; });
  }
}
