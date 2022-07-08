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
    if (!isFalseSens(sens)) {
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
function isFalseSens(senses: number[]): boolean {
  return (senses[0] >= senses[1] || senses[2] <= senses[1])
}
