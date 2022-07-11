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
  @Input() roundToDigit: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.syncRoundToDigitOption();
  }

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

  syncRoundToDigitOption() {
    document.querySelectorAll('.round-to-option').forEach((roundOption) => {
      if (roundOption.getAttribute('value') == this.roundToDigit.toString()) {
        roundOption.setAttribute('selected', 'selected');
      }
    });
  }
}
