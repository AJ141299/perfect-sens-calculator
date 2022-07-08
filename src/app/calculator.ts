// calculates and returns an array of senses
export function calculator(senses: number[], chosenSens: number, firstCalculate?: boolean, autoRound?: boolean): number[] {
    const output: number[] = []

    let sens1: number
    let sens2: number
    let sens3: number

    if (firstCalculate) {
        sens1 = parseFloat((senses[0] / 2).toFixed(3))
        sens2 = senses[0]
        sens3 = parseFloat((senses[0] * 2).toFixed(3))

        if (autoRound) {
            sens1 = Math.round(sens1)
            sens2 = Math.round(sens2)
            sens3 = Math.round(sens3)
        }
        output.push(sens1, sens2, sens3)
        return output
    }

    // if middle chosen
    if (chosenSens === 1) {
        sens1 = parseFloat((getAvg(senses[0], senses[chosenSens])).toFixed(3))
        sens2 = senses[chosenSens]
        sens3 = parseFloat((getAvg(senses[chosenSens], senses[2])).toFixed(3))
        
        // if left or right sens is chosen
    } else {
        sens1 = parseFloat((senses[chosenSens] / 2).toFixed(3))
        sens2 = senses[chosenSens]
        sens3 = parseFloat((senses[chosenSens] * 1.5).toFixed(3))
    }

    if (autoRound) {
        sens1 = Math.round(sens1)
        sens2 = Math.round(sens2)
        sens3 = Math.round(sens3)
    }

    output.push(sens1, sens2, sens3)
    return output
}

// returns the average of two nums
function getAvg(num1: number, num2: number): number {
    return ((num1 + num2) / 2)
}

