import { Product } from '../modules/product';
import { ProductUnionType, GET_PRODUCT, GET_PRODUCT_SUCCESS, SEARCH_PRODUCT_SUCCESS } from './../actions/product.actions';

export interface ProductState {
    createdAt: {
        loaded: boolean;
        success: boolean;
        products: Product[];
    },
    sold: {
        loaded: boolean;
        success: boolean;
        products: Product[];
    },
    search: Product[]
}
const initialState: ProductState = {
    createdAt: {
        loaded: false,
        success: false,
        products: [],
    },
    sold: {
        loaded: false,
        success: false,
        products: [],
    },
    search: []
};

export default function productReducer(state = initialState, action: ProductUnionType): ProductState {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                [action.sortBy]: {
                    ...state[action.sortBy === 'createdAt' ? 'createdAt' : 'sold'],
                    loaded: false,
                    success: false,
                    // products: []
                }
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                [action.sortBy]: {
                    loaded: true,
                    success: true,
                    products: action.payload
                }
            }
        case SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                search: action.products
            }
        default:
            return state;
    }
}