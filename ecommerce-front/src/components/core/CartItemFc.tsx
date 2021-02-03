import React, { FC } from 'react';
import { CartItem } from '../../helpers/cart';
import { Image, Button, Input } from 'antd';
import { API } from '../../config';
interface IProps {
    product: CartItem
}

const CartItemFc: FC<IProps> = ({product}) => {
    return (
        <tr className="ant-table-row">
            <td className="ant-table-cell">
                <Image width={120} src={`${API}/product/photo/${product._id}`} / >
            </td>
            <td className="ant-table-cell">{product.name}</td>
            <td className="ant-table-cell">{product.price}</td>
            <td className="ant-table-cell">{product.category.name}</td>
            <td className="ant-table-cell">
                <Input type="number" defaultValue={product.count} />
            </td>
            <td className="ant-table-cell">
                <Button danger type="primary">删除</Button>
            </td>
        </tr>
    );
}

export default CartItemFc;
