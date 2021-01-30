import { useSelector } from 'react-redux';
import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import { History } from 'history';
import authReducer, { AuthState } from './auth.reducer';
export interface AppState {
    router: RouterState,
    auth: AuthState,
}

const createRouteReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    auth: authReducer
})

export default createRouteReducer;
