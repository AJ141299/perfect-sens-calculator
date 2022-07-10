// calculates and returns an array of senses
export function calculator(senses: number[], chosenSens: number, firstCalculate?: boolean, roundTo?: number): number[] {
    const output: number[] = []

    let sens1: number
    let sens2: number
    let sens3: number

    if (!roundTo) {
        roundTo = 0
    }

    if (firstCalculate) {
        sens1 = parseFloat((senses[0] / 2).toFixed(roundTo))
        sens2 = senses[0]
        sens3 = parseFloat((senses[0] * 2).toFixed(roundTo))

        output.push(sens1, sens2, sens3)
        return output
    }

    // if middle chosen
    if (chosenSens === 1) {
        sens1 = parseFloat((getAvg(senses[0], senses[chosenSens])).toFixed(roundTo))
        sens2 = senses[chosenSens]
        sens3 = parseFloat((getAvg(senses[chosenSens], senses[2])).toFixed(roundTo))
        
        // if left or right sens is chosen
    } else {
        sens1 = parseFloat((senses[chosenSens] / 2).toFixed(roundTo))
        sens2 = senses[chosenSens]
        sens3 = parseFloat((senses[chosenSens] * 1.5).toFixed(roundTo))
    }

    output.push(sens1, sens2, sens3)
    return output
}

// returns the average of two nums
function getAvg(num1: number, num2: number): number {
    return ((num1 + num2) / 2)
}

