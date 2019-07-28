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
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_FAILED':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            };
        case 'EDIT_ACCOUNT_SUCCESS':
            console.log('edit account success')
            return {
                ...state,
                authError: null
            };
        case 'EDIT_ACCOUNT_FAILED':
            console.log('edit account success')
            return state;
        default:
            return state;
    }
}

export default authReducer;