import { createStore } from 'redux'
const ADD_GADGET = 'ADD_GADGET'
const DEL_GADGET = 'DEL_GADGET'

const addGadgetAction =  newgadget => {
    return {
        type:ADD_GADGET,
        payload:newgadget
    }
}

const delGadgetAction =  gadget => {
    return {
        type:DEL_GADGET,
        payload:gadget
    }
}

const stateToPropsMap = state => {
    return {
        IconsList: state
    }
}

const dispatchToPropsMaps = dispatch => {
    return {
        addGadget : newgadget => dispatch(addGadgetAction(newgadget)),
        delGadget : gadget => dispatch(delGadgetAction(gadget))
    }
}

const IconNames = ['hogar','bitcoin','calculadora','clima','portapapeles']

const reducer = (state = IconNames,action) => {
    switch(action.type){
        case ADD_GADGET:
            return state.concat(action.newgadget)
        case DEL_GADGET:
            return state.slice(0,action.index).concat(state.slice(action.index+1))
        default:
            return state
    }
}
const store = createStore(reducer)

export { store , stateToPropsMap, dispatchToPropsMaps };