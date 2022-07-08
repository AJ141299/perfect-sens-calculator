import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { calculator } from '../../calculator';

@Component({
  selector: 'app-init-sens',
  templateUrl: './init-sens.component.html',
  styleUrls: ['./init-sens.component.css']
})
export class InitSensComponent implements OnInit {
  @Output() onCalculate = new EventEmitter<number[]>()
  @Output() resetEvent = new EventEmitter()

  sensInput: string = '';
  hideClearBtn: boolean = true
  enableCalculateBtn: boolean = true
  constructor() { }

  ngOnInit(): void {
    
  }

  calculateSens() {
    // check for empty field
    if (!this.sensInput) {
      return
    }

    this.enableCalculateBtn = false
    this.hideClearBtn = false
    const inputValue:number = parseFloat(this.sensInput);
    this.onCalculate.emit(calculator([inputValue], 0, true))

    const sensInputField = <HTMLInputElement>document.getElementById('init-sens');
    sensInputField.value = ''
  }

  reset() {
    this.resetEvent.emit();
    this.enableCalculateBtn = true
    this.hideClearBtn = true
  }
}
