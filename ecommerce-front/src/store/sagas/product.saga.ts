import { Product } from './../modules/product';
import { API } from './../../config';
import { GET_PRODUCT, GetProductAction, getProductSuccess, SEARCH_PRODUCT, SearchProductAction, searchProductSuccess, FILTER_PRODUCT, FilterProductAction, filterProductSuccess, GET_PRODUCT_BY_ID, GetProductByIdAction, getProductByIdSuccess } from './../actions/product.actions';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function *handleGetProduct ({sortBy, order, limit}: GetProductAction) {
    const response = yield axios.get<Product[]>(`${API}/products`, {
        params: {
            sortBy,
            order,
            limit
        }
    });
    yield put(getProductSuccess(response.data, sortBy ))
}
function *handleSearchProduct ({payload: {search, category}}: SearchProductAction) {
    const response = yield axios.get<Product[]>(`${API}/products/search`, {
        params: {
            search,
            category
        }
    });
    yield put(searchProductSuccess(response.data));
}
function *handleFilterProduct(action: FilterProductAction) {
    let response = yield axios.post<Product[]>(`${API}/products/filter`, action.payload);
    yield put(filterProductSuccess(response.data, action.payload.skip));
}
function *handleGetProductById(action: GetProductByIdAction) {
    let response = yield axios.post<Product>(`${API}/products/${action.payload.productId}`, action.payload);
    yield put(getProductByIdSuccess(response.data));
}
export default function * productSaga() {
    yield takeEvery(GET_PRODUCT, handleGetProduct);
    yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
    yield takeEvery(FILTER_PRODUCT, handleFilterProduct)
    yield takeEvery(GET_PRODUCT_BY_ID, handleGetProductById)
}