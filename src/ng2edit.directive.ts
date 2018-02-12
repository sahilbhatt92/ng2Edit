import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ng2EditDirective]'
})
export class Ng2EditDirective {

  constructor(private el: ElementRef) {
  }

}
