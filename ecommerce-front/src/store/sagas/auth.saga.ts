import { SIGNUP, SignupAction, signupSuccess, signupFail, SIGNIN, SigninAction } from './../actions/auth.actions';
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { API } from '../../config';

function * handleSignup(action: SignupAction) {
    try {
        yield axios.post(`${API}/signup`, action.payload);
        yield put(signupSuccess());
    } catch (error) {
        console.log(error)
        yield put(signupFail(error.response.data.error));
    }
}
function * handleSignin(action: SigninAction) {
    try {
        const response = yield axios.post(`${API}/signin`, action.payload);
        localStorage.setItem('jwt', JSON.stringify(response.data));
        yield put(signupSuccess())
    } catch (error) {
        yield put(signupFail(error.response.data.error));
    }
}

export default function * authSaga() {
    // 注册
    yield takeEvery(SIGNUP, handleSignup);
    // 登陆
    yield takeEvery(SIGNIN, handleSignin);
}