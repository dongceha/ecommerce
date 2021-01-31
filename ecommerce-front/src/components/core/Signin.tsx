import React from 'react';
import Layout from './Layout';
import { Button, Form, Input, Result } from 'antd';
import { SigninPayload, signin } from '../../store/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/modules/auth';
import { Redirect } from 'react-router-dom';

const Signin = () => {
    const dispatch = useDispatch();
    const onFinish = (value: SigninPayload) => {
        console.log(value);
        dispatch(signin(value))
    }
    // 获取登陆结果
    const auth = useSelector<AppState, AuthState>(state => state.auth);
    // 登陆失败，显示登陆结果
    const showError = () => {
        if (auth.signin.loaded && !auth.signin.success) {
            return (
                <Result status="warning" title="登陆失败" subTitle={auth.signin.message} />
            )
        }
    }
    const redirectToDashBoard = () => {
        const auth = isAuth();
        if (auth) {
            const {user: {role}} = auth as Jwt;

            if (role === 0) {
                // 注册用户
                return <Redirect to="/user/dashboard" />
            } else {
                // 管理员
                return <Redirect to="/admin/dashboard" />
            }
        }
    }
    const signinForm = () => (
        <Form onFinish={onFinish}>
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
    )
    return (
        <Layout title="登陆" subtitle="欢迎登陆">
            {showError()}
            {redirectToDashBoard()}
            {signinForm()}
        </Layout>
    );
}

export default Signin;
