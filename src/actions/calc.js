import { NUMBER_INPUT_A, NUMBER_INPUT_B, ADD, SUB, MULT, DIV } from './types'

export const numberInputA = (num) => {
    return {
        type: NUMBER_INPUT_A,
        payload: num
    }
}

export const numberInputB = (num) => {
    return {
        type: NUMBER_INPUT_B,
        payload: num
    }
}

//operators
export const add = (numA, numB) => {
    return {
        type: ADD,
        payload: [numA, numB]
    }
}

export const sub = (numA, numB) => {
    return {
        type: SUB,
        payload: [numA, numB]
    }
}

export const mult = (numA, numB) => {
    return {
        type: MULT,
        payload: [numA, numB]
    }
}

export const div = (numA, numB) => {
    return {
        type: DIV,
        payload: [numA, numB]
    }
}