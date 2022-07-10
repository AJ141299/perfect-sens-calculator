// {                                              !SenseDB
//    originSens: X,
//    sensesData: [                               !SenseTable
//      { senses: [25, 50, 100], pickedPos: 0},   !SenseRow
//      { senses: [25, 50, 100], pickedPos: 0}
//    ]
//  }

export interface SensDB {
  originSens: number;
  sensTable: SensRow[];
}

export interface SensRow {
  sens: number[];
  pickedPos: number;
}
