import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() siblings: [];

  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  clicked: boolean = false;

  ngOnInit(): void {}

  clickButton() {
    this.buttonClicked.emit('This is the message from the child component');
    this.clicked = true;
  }
}
