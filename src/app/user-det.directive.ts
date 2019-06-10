import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '.app-user-Det'
})
export class UserDetDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover('#C46D5E');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('#DAA588');
  }

  private hover(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }


}