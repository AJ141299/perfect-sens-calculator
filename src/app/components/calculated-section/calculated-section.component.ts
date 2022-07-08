import { Component, OnInit } from '@angular/core';
import { calculator } from '../../calculator';

@Component({
  selector: 'app-calculated-section',
  templateUrl: './calculated-section.component.html',
  styleUrls: ['./calculated-section.component.css']
})
export class CalculatedSectionComponent implements OnInit {
  senses: number[][] = [];
  autoRound: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  firstDisplay(sens: number[]) {
    this.senses = []
    this.senses.push(sens)
  }

  displaySens(sens: number[]) {
    if (!isFalseSens(sens)) {
      this.senses.push(sens)
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  calculateNewSens(sensPos: number) {
      this.displaySens(calculator(this.senses[this.senses.length - 1], sensPos, false, this.autoRound))
  }

  reset() {
    this.senses = []
  }

  toggleAutoRound(autoRound: boolean) {
    this.autoRound = autoRound
    this.senses = []
  }
}

// returns if any of the three senses are equal
function isFalseSens(senses: number[]): boolean {
  return (senses[0] >= senses[1] || senses[2] <= senses[1])
}
