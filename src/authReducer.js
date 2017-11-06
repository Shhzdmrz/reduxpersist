const authReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return { ...state, authenticated: true };
        case 'LOGOUT_USER':
            return { ...state, authenticated: false };
        case "persist/REHYDRATE": {
            const data = action.payload;
            if (data) return {...state, ...data.auth}
        }
        default:
            return state;
    }
}

export default authReducer;