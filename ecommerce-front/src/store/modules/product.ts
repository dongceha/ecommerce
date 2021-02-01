import { Category } from './category';
export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    category: Category;
    quantity: number;
    sold?: number;
    phono: FormData;
    shipping: boolean;
    createAt: string;
}
export interface Price {
    id: number;
    name: string;
    array: [number?, number?];
}