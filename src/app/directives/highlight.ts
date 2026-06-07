import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  @Input() price!: number;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {

    if (this.price > 2000) {
      this.el.nativeElement.style.backgroundColor = '#fff4c2';
    }

  }
}