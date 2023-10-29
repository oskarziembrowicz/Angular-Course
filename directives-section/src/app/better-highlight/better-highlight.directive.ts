import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'backgroundColor',
      'transparent'
    );
  }
}
