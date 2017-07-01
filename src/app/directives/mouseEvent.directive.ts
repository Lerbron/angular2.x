/** * Created by admin on 2017/6/29. */import { Directive, ElementRef, HostListener, Input} from '@angular/core';// HostListener 属性装饰器，用来给宿主元素添加时间监听。（ 宿主元素：就是使用该指令的元素）@Directive({ selector: '[appMouseOver]'})export class MouseOverDirective {  @Input('appMouseOver') highLightColor: string;  // 接收父组件传递的属性值。并且对 highLightColor 取别名为appMouseOver，即该属性对外使用appMouseOver,在该指令内部依然使用 highLightColor  constructor( public el: ElementRef) {}  @HostListener('mouseenter') onMouseEnter() {    this.hightlight(this.highLightColor || 'red');  }  @HostListener('mouseleave') onMouseLeave() {    this.hightlight(null);  }  private hightlight (color: string) {    this.el.nativeElement.style.color = color;  }}