const initState = {
    user: {}
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                user: action.payload.user,
            }
        default:
            return { ...state }
    }
};