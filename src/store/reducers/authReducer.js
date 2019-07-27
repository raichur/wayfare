const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_FAILED':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            };
        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return state;
        default:
            return state;
    }
}

export default authReducer;