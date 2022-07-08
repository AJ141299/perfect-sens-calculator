import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-senses',
  templateUrl: './senses.component.html',
  styleUrls: ['./senses.component.css']
})
export class SensesComponent implements OnInit {
  @Input() sensArr: number[] = [];
  hideBtns: boolean = false;
  @Output() newSensEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  newSens(sensPos: number) {
    this.hideBtns = true
    this.newSensEvent.emit(sensPos)
  }

}
