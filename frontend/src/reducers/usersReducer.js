const initState = {
    users: {}
}

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload.users,
            }
        default:
            return { ...state }
    }
};