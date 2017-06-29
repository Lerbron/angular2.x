import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {
  tabs = ['home', 'more', 'mine'];
  idx = 0;
  constructor( public router: Router) { }

  ngOnInit() {
  }
  selectIdx (selectIdx, route) {
    this.idx = selectIdx;
    this.router.navigateByUrl(route);
  }
}
