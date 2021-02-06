import { Table, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API } from '../../config';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/modules/auth';
import { Order } from '../../store/modules/order';
import Layout from './Layout';

const { Title } = Typography;

const Orders = () => {
    const {user, token} = isAuth() as Jwt;
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
        async function getOrders() {
            let response = await axios.get(`${API}/order/list/${user._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setOrders(response.data);
        }
        getOrders();
    }, []);
    const getOrderCount = () => {
        if (orders.length > 0) {
            return `当前订单的数量是 ${orders.length}`
        } else {
            return '当前没有订单'
        }
    }
    return (
        <Layout title="订单" subtitle={getOrderCount()}>
            {
                orders.map(order => {
                    return (
                        <>
                          <Title level={4}>订单ID：${order._id}</Title>
                          <Table>
                                
                          </Table>
                        </>
                    )
                })
            }
        </Layout>
    );
}

export default Orders;
