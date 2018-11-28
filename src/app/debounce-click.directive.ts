import { Directive,  HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[debouncedClick]'
})
export class DebounceClickDirective {
  @Output() debounceClick = new EventEmitter();
  @Output() debounceDoubleClick = new EventEmitter();

  private prevent: boolean;
  private timer: any;

  constructor() { }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    this.timer = setTimeout(() => {
      if (!this.prevent) {
        this.debounceClick.emit();
      }
      this.prevent = false;
    }, 500);
  }

  @HostListener('dblclick', ['$event'])
  doubleClickEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    clearTimeout(this.timer);

    this.prevent = true;

    this.debounceDoubleClick.emit();
  }
}