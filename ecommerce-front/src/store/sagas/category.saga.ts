import { Category } from './../modules/category';
import { API } from './../../config';
import { GET_CATEGORY, getCategorySuccess } from './../actions/category.actions';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function * handleGetCategory() {
    const response = yield axios.get<Category[]>(`${API}/categories`);
    yield put(getCategorySuccess(response.data));
}

export default function * categorySaga() {
    // 获取分类列表
    yield takeEvery(GET_CATEGORY, handleGetCategory)
}