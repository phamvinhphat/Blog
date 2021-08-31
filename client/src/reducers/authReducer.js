import {SET_AUTH, EDIT_USER} from "../contexts/constants"

export const authReducer = (state, action) => {
    const {type, payload: {isAuthenticated, user}} = action

    switch(type) {
        case SET_AUTH:
            return{
                ...state,
                authLoading: false,
                isAuthenticated,
                user
            }

            // case EDIT_USER:
            // return{
            //         ...state,
            //         authLoading: false,
            //         isAuthenticated,
            //         user
            // }
                


            default:
                return state
    }
}