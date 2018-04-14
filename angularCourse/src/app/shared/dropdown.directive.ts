import { Directive, HostListener, OnInit, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  showDropdown: boolean = false;
  @HostListener('click') mouseclick() {
    this.showDropdown = ! this.showDropdown;
    if (this.showDropdown) {
      this.renderer.addClass(this.elRef.nativeElement.nextElementSibling, 'show');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement.nextElementSibling, 'show');
    }
  }


  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {

  }
}
