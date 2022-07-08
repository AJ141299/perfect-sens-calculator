import { Component, OnInit } from '@angular/core';
import { calculator } from '../../calculator';

@Component({
  selector: 'app-calculated-section',
  templateUrl: './calculated-section.component.html',
  styleUrls: ['./calculated-section.component.css']
})
export class CalculatedSectionComponent implements OnInit {
  senses: number[][] = [];

  constructor() { }

  ngOnInit(): void {
  }

  firstDisplay(sens: number[]) {
    this.senses = []
    this.senses.push(sens)
  }

  displaySens(sens: number[]) {
    if (!equal(sens)) {
      this.senses.push(sens)
      window.scrollTo(0, document.body.scrollHeight);
    } 
  }

  calculateNewSens(sensPos: number) {
      this.displaySens(calculator(this.senses[this.senses.length - 1], sensPos, false))
  }

  reset() {
    this.senses = []
  }

}

// returns the average of two nums
function getAvg(num1: number, num2: number): number {
  return ((num1 + num2) / 2)
}

// returns if any of the three senses are equal
function equal(senses: number[]): boolean {
  const areEqual = senses[0] == senses[1] || senses[1] == senses[2] || senses[0] == senses[2]

  if (areEqual) {
      return true
  }

  const avgZero1 = !(parseInt(getAvg(senses[0], senses[1]).toFixed(1)))
  const avgZero2 = !(parseInt(getAvg(senses[1], senses[2]).toFixed(1)))

  // checks if average is close to 0
  if (avgZero1 || avgZero2) {
      return true
  }
  
  return false
}
