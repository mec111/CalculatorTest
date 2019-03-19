import { NUMBER_INPUT_A, NUMBER_INPUT_B, ADD, SUB, MULT, DIV } from '../actions/types'

const initialState = {
    numA: '',
    numB: '',
    result: 0
}

export default (state=initialState, action) => {
    switch (action.type) {
        case NUMBER_INPUT_A:
            return {...state, numA: action.payload}
        case NUMBER_INPUT_B:
            return {...state, numB: action.payload}
        case ADD:
            return {...state, result: parseInt(action.payload[0])+parseInt(action.payload[1])}
        case SUB:
            return {...state, result: parseInt(action.payload[0])-parseInt(action.payload[1])}
        case MULT:
            return {...state, result: parseInt(action.payload[0])*parseInt(action.payload[1])}
        case DIV:
            return {...state, result: parseInt(action.payload[0])/parseInt(action.payload[1])}
        default:
            return state;
    }
}