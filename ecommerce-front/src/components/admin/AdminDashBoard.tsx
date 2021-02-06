import Layout from '../core/Layout';
import React from 'react';
import { Col, Menu, Row, Typography, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import {
    ShoppingOutlined,
    UserOutlined,
    OrderedListOutlined,
} from '@ant-design/icons';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/modules/auth';

const { Title } = Typography;

const AdminDashboard = () => {
    // const {user: {name, email}} = isAuth() as Jwt;
    const adminLinks = () => (
        <>
            <Title level={5}>管理员连接</Title>
            <Menu>
                <Menu.Item>
                    <ShoppingOutlined />
                    <Link to="/create/category">添加分类</Link>
                </Menu.Item>
                <Menu.Item>
                    <UserOutlined />
                    <Link to="/create/product">添加产品</Link>
                </Menu.Item>
                <Menu.Item>
                    <OrderedListOutlined />
                    <Link to="/admin/orders">订单列表</Link>
                </Menu.Item>
            </Menu>
        </>
    );
    const adminInfo = () => (
        <Descriptions title="管理员信息" bordered>
            <Descriptions.Item label="昵称">段誉</Descriptions.Item>
            <Descriptions.Item label="邮件">duanyu@163.com</Descriptions.Item>
            <Descriptions.Item label="角色">管理用户</Descriptions.Item>
        </Descriptions>
    )
    return (
        <Layout title="管理员 Dashboard" subtitle="">
            <Row>
                <Col span="4">{adminLinks()}</Col>
                <Col span="20">
                    {adminInfo()}
                </Col>
            </Row>
        </Layout>
    )
}
export default AdminDashboard;
