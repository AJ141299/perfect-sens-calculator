import { SensRow } from './components/sensDB-interface';

// calculates and returns a SensRow object
export function calculator(
  sensRow: SensRow,
  roundTo: number,
  firstCalculate?: boolean
): SensRow {
  let newSens: SensRow = { sens: [], pickedPos: -1 };
  const pickedPos: number = sensRow.pickedPos;
  const senses: number[] = sensRow.sens;

  let sens1: number;
  let sens2: number;
  let sens3: number;

  if (firstCalculate) {
    sens1 = parseFloat((senses[0] / 2).toFixed(roundTo));
    sens2 = senses[0];
    sens3 = parseFloat((senses[0] * 2).toFixed(roundTo));

    newSens.sens.push(sens1, sens2, sens3);
    return newSens;
  }

  // if middle chosen
  if (pickedPos === 1) {
    sens1 = parseFloat(getAvg(senses[0], senses[pickedPos]).toFixed(roundTo));
    sens2 = senses[pickedPos];
    sens3 = parseFloat(getAvg(senses[pickedPos], senses[2]).toFixed(roundTo));

    // if left or right sens is chosen
  } else {
    sens1 = parseFloat((senses[pickedPos] / 2).toFixed(roundTo));
    sens2 = senses[pickedPos];
    sens3 = parseFloat((senses[pickedPos] * 1.5).toFixed(roundTo));
  }

  newSens.sens.push(sens1, sens2, sens3);
  return newSens;
}

// returns the average of two nums
function getAvg(num1: number, num2: number): number {
  return (num1 + num2) / 2;
}
