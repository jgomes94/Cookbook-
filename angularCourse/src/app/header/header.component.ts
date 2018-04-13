import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() headerClick: EventEmitter<any> = new EventEmitter();
 
  constructor() { }

  clickEvent(event: any){
    console.log(event);
    this.headerClick.emit(event);
  }

}
