import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  head = 'morePage';
  aproCount = 0;
  agaiCount = 0;
  abstCount = 0;
  data = [
    {name: 'LiMing', age: 18},
    {name: 'HanMeiMei', age: 17},
    {name: 'LiLei', age: 18}
  ];
  constructor() {
  }

  ngOnInit() {
  }
  count(event) {
    console.log(event);
    if (event === 'approve') {
      this.aproCount += 1;
    } else if (event === 'against') {
      this.agaiCount += 1;
    } else if (event === 'abstention') {
      this.abstCount += 1;
    }
  }

}
