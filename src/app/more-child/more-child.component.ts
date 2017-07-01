import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-more-child',
  templateUrl: './more-child.component.html',
  styleUrls: ['./more-child.component.css']
})
export class MoreChildComponent implements OnInit {
  @Input() data: Array<Object>;
  @Output() isApro = new EventEmitter();  // new 一个事件实例 isApro, 通过@Output将子组件的值传递给父组件。父组件中的属性名要与事件实例的名称一致
  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit() {
  }
  isApprove(isApprove) {
    this.isApro.emit(isApprove);
  }

}
