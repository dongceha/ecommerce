import React from 'react';
import Layout from './Layout';
import { Button, Form, Input } from 'antd';

const Signin = () => {
    return (
        <Layout title="登陆" subtitle="欢迎登陆">
            <Form>
                <Form.Item name="password" label="密码">
                    <Input.Password />
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">登陆</Button>
                </Form.Item>
            </Form>
        </Layout>
    );
}

export default Signin;
