import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.css'],
})
export class FloatingBtnComponent implements OnInit {
  @Input() disable: boolean = true;
  @Input() text: string = '';
  @Output() clickedEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  btnClicked() {
    this.clickedEvent.emit();
  }
}
