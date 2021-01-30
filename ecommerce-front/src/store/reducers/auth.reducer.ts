import { AuthUnionType, SIGNUP, signup, SIGNUP_SUCCESS, SIGNUP_FAIL, RESET_SIGNUP } from './../actions/auth.actions';

export interface AuthState {
    signup: {
        loaded: boolean;
        success: boolean;
        message: string;
    }
}

const intialState: AuthState = {
    signup: {
        loaded: false,
        success: false,
        message: '',
    }
}

export default function authReducer (state = intialState, action: AuthUnionType): AuthState {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false,
                    message: ''
                }
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: true,
                    message: ''
                }
            };
        case SIGNUP_FAIL:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: false,
                    message: action.message,
                }
            };
        case RESET_SIGNUP:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false,
                    message: '',
                }
            }
        default:
            return state;
    }
}