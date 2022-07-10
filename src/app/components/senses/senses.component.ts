import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-senses',
  templateUrl: './senses.component.html',
  styleUrls: ['./senses.component.css'],
})
export class SensesComponent implements OnInit {
  @Input() sensArr: number[] = [];
  hideBtns: boolean = false;
  textColors: string[] = [
    'text-teal-300',
    'text-fuchsia-300',
    'text-orange-300',
  ];
  @Output() newSensEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  newSens(pickedSensPos: number) {
    this.hideBtns = true;
    this.newSensEvent.emit(pickedSensPos);
  }
}
