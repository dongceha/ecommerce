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

/**
 * 获取本地购物车数据
 * */ 
export const getCart = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')!) as CartItem[];
        }
    }
    return []
}

/**
 * 更改购物车中的商品数量
 * */ 
/**
 * 将商品添加到购物车
 * */
export const updateItem = (productId: string, count: number): CartItem[] => {
    let cart: CartItem[] = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')!) as CartItem[];
        }
        cart.forEach((item, index) => {
            if (item._id === productId) {
                cart[index].count = count
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
}

/**
 * 删除购物车中的商品
 * */ 
export const deleteItem = (productId: string): CartItem[] => {
    let cart: CartItem[] = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')!) as CartItem[];
        }
        cart.forEach((item, index) => {
            if (item._id === productId) {
                cart.splice(index, 1);
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
} 