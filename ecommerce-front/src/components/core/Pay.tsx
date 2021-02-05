import { Button } from 'antd';
import axios from 'axios';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import { isAuth } from '../../helpers/auth';
import { CartItem } from '../../helpers/cart';
import { Jwt } from '../../store/modules/auth';
interface Props {
    totalPrice: number;
    address: string;
    cart: CartItem[];
}
const Pay: FC<Props> = ({totalPrice, address, cart}) => {
    const getPayUrl = () => {
        axios.post(`${API}/alipay`, {
            totalAmount: totalPrice,
            subject: '测试订单标题',
            body: '测试订单描述',
            products: cart.map(item => ({count: item.count, product: item._id})),
            address,
            userId: (isAuth() as Jwt).user._id
        }).then(res => location.href = res.data.result)
    }
    const showButton = () => {
        return isAuth() ? 
          <Button onClick={getPayUrl}>提交订单</Button> 
        : <Button><Link to="/signin">登陆</Link></Button>
    }
    return (
        <>
          {showButton()}
        </>
    );
}

export default Pay;
