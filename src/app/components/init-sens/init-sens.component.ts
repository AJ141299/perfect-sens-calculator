import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-init-sens',
  templateUrl: './init-sens.component.html',
  styleUrls: ['./init-sens.component.css'],
})
export class InitSensComponent implements OnInit {
  @Output() firstCalculate = new EventEmitter<number>();
  @Output() resetEvent = new EventEmitter();
  @Output() roundToEvent = new EventEmitter<number>();
  @Input() disableResetBtn: boolean = true;

  sensInput: string = '';
  enableCalculateBtn: boolean = true;
  disableRoundToInput: boolean = false;
  roundToDigit: number = 0;

  constructor() {}

  ngOnInit(): void {}

  calculateSens() {
    // check for empty field
    if (!this.sensInput) {
      return;
    }

    this.enableCalculateBtn = false;
    this.disableResetBtn = false;
    const firstSens: number = parseFloat(this.sensInput);
    this.firstCalculate.emit(firstSens);
  }

  reset() {
    const sensInputField = <HTMLInputElement>(
      document.getElementById('init-sens')
    );
    sensInputField.value = '';
    this.resetEvent.emit();
    this.enableCalculateBtn = true;
    this.disableResetBtn = true;
  }

  updateRoundToDigit(roundToElement: HTMLSelectElement) {
    const newRoundToDigit = roundToElement.selectedIndex;

    if (newRoundToDigit >= 0 && newRoundToDigit < 6) {
      this.roundToDigit = newRoundToDigit;
      this.roundToEvent.emit(newRoundToDigit);
    }
  }
}
