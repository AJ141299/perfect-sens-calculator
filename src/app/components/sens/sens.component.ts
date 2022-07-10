import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sens',
  templateUrl: './sens.component.html',
  styleUrls: ['./sens.component.css']
})
export class SensComponent implements OnInit {
  @Input() sens: number = 0;
  @Input() sensArr: number[] = [];
  @Input() hideBtns: boolean = false;
  @Output() newSensEvent = new EventEmitter<number>();
  crossOut: boolean = false;
  showCopyTooltip: boolean = false;
  
  @Input() textColor: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

  newSens() {
    const pickedSensPos: number = this.sensArr.findIndex(element => element == this.sens)
    this.newSensEvent.emit(pickedSensPos)
  }

  crossOutValue() {
    if (this.crossOut) {
      this.crossOut = false
    } else {
      this.crossOut = true
    }
  }

  copyToClipboard() {
    this.showCopyTooltip = true
    navigator.clipboard.writeText(this.sens.toString());

    setTimeout(() => {this.showCopyTooltip = false}, 1100)
  }
}
