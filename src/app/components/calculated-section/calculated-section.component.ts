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
    this.senses.push(sens)
    console.log(document.body.scrollHeight)
    window.scrollTo(0, document.body.scrollHeight);
  }

  calculateNewSens(sensPos: number) {
      this.displaySens(calculator(this.senses[this.senses.length - 1], sensPos, false))
  }

  reset() {
    this.senses = []
  }

}
