import { Component, OnInit } from '@angular/core';
import { calculator } from '../../calculator';
import { SensDB, SensRow } from '../sensDB-interface';

@Component({
  selector: 'app-calculated-section',
  templateUrl: './calculated-section.component.html',
  styleUrls: ['./calculated-section.component.css'],
})
export class CalculatedSectionComponent implements OnInit {
  sensDB: SensDB = { originSens: 0, sensTable: [] };
  sensCollection: number[][] = [];
  roundToDigit: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.updateFromLocalStorage();
  }

  firstCalculate(originSens: number) {
    this.reset();
    this.sensDB.originSens = originSens;
    const newSens: SensRow = calculator(
      { sens: [originSens], pickedPos: 0 },
      this.roundToDigit,
      true
    );
    this.refreshDisplay(newSens);
  }

  refreshDisplay(newSens: SensRow) {
    if (!isFalseSens(newSens.sens)) {
      this.sensDB.sensTable.push(newSens);
      this.updateSensCollection();
      this.setLocalStorage();
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  updateSensCollection() {
    const lastSens: number[] =
      this.sensDB.sensTable[this.getLastSensIndex()].sens;
    this.sensCollection.push(lastSens);
  }

  calculateSens(pickedPos: number) {
    this.setLastSensPos(pickedPos);
    const lastSens = this.sensDB.sensTable[this.getLastSensIndex()];
    const newSens: SensRow = calculator(lastSens, this.roundToDigit, true);
    this.refreshDisplay(newSens);
  }

  getLastSensIndex() {
    return this.sensDB.sensTable.length - 1;
  }

  setLastSensPos(pickedPos: number) {
    this.sensDB.sensTable[this.getLastSensIndex()].pickedPos = pickedPos;
  }

  reset() {
    this.sensDB = { originSens: 0, sensTable: [] };
    this.sensCollection = [];
  }

  updateRoundToDigit(newRoundToDigit: number) {
    this.roundToDigit = newRoundToDigit;
    this.reset();
  }

  setLocalStorage() {
    localStorage.setItem('sensDB', JSON.stringify(this.sensDB));
    localStorage.setItem('sensCollection', JSON.stringify(this.sensCollection));
  }

  updateFromLocalStorage() {
    this.sensDB = JSON.parse(localStorage.getItem('sensDB') || '{}');
    this.sensCollection = JSON.parse(
      localStorage.getItem('sensCollection') || '{}'
    );
  }
}

// returns if any of the three senses are equal
function isFalseSens(newSens: number[]): boolean {
  return newSens[0] >= newSens[1] || newSens[2] <= newSens[1];
}
