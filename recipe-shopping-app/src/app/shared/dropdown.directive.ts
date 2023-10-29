import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  isOpen = false;

  @HostListener('click') toggleDropdown(eventData: Event) {
    if (this.isOpen) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      this.isOpen = false;
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
      this.isOpen = true;
    }
  }
}
