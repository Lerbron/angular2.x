import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Input() head: string;    // 通过@Input() 接收，绑定父组件传递的属性，值
  constructor() { }

  ngOnInit() {
  }

}
