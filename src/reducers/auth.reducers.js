import { authConstants } from "../actions/constant"

const initialState = {
    name: 'Riz'
}

export default (state = initialState,action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST :
            state = {
                ...action.payload
            }
            break
    }
    return state
}