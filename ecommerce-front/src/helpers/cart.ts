import { Product } from './../store/modules/product';

export interface CartItem extends Product {
    count: number;
}
/**
 * 将商品添加到购物车
 * */
export const addItem = (item: Product, next: () => void) => {
    let cart: CartItem[] = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')!) as CartItem[];
        }
    }
    cart.push({
        ...item,
        count: 1
    });
    cart = Array.from(new Set(cart.map(item => item._id))).map(item => {
        return cart.find(product => product._id === item);
    }) as CartItem[];
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}