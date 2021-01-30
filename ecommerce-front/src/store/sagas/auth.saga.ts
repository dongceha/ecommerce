import { SIGNUP, SignupAction, signupSuccess, signupFail } from './../actions/auth.actions';
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

export default function * authSaga() {
    yield takeEvery(SIGNUP, handleSignup);
}