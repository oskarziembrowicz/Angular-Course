import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementReference: ElementRef) {}
  // constructor automatically assigns to newly created variable: elementReference

  ngOnInit() {
    this.elementReference.nativeElement.style.backgroundColor = 'green';
  }
}
