const defaultState = {
    customers: []
}

export const customersStore = (state = defaultState, actions) => {
    switch (actions.type) {
        case "ADD_CUSTOMER":
            return {...state, customers: [... state, actions.payload]}
        default:
            return state
    }
}
