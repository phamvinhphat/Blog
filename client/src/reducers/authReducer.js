export const authRoducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case 'SET_AUTH':
            return{
                ...state
            }
    }
}