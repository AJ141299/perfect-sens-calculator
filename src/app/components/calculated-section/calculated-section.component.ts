import { Component, OnInit } from '@angular/core';
import { calculator } from '../../calculator';

@Component({
  selector: 'app-calculated-section',
  templateUrl: './calculated-section.component.html',
  styleUrls: ['./calculated-section.component.css'],
})
export class CalculatedSectionComponent implements OnInit {
  senses: number[][] = [];
  // senses = [{senses(number[]): [25,50,100], pickedPos(number): 0}]
  roundToDigit: number = 0;
  constructor() {}

  ngOnInit(): void {}

  firstDisplay(sens: number[]) {
    this.senses = [];
    this.senses.push(sens);
  }

  // displays a 'sens' (e.g. [25, 50, 100]) on the calculated section
  displaySens(sens: number[]) {
    if (!isFalseSens(sens)) {
      this.senses.push(sens);
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  calculateNewSens(pickedSensPos: number) {
    this.displaySens(
      calculator(
        this.senses[this.senses.length - 1],
        pickedSensPos,
        false,
        this.roundToDigit
      )
    );
  }

  reset() {
    this.senses = [];
  }

  updateRoundToDigit(newRoundToDigit: number) {
    this.roundToDigit = newRoundToDigit;
    this.reset();
  }
}

// returns if any of the three senses are equal
function isFalseSens(senses: number[]): boolean {
  return senses[0] >= senses[1] || senses[2] <= senses[1];
}
