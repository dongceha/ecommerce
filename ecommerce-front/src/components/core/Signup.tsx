import { Button, Form, Input, Result } from 'antd';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetSignup, signup, SignupPayload } from '../../store/actions/auth.actions';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import Layout from './Layout';

const Signup = () => {
    const dispatch = useDispatch();
    const auth = useSelector<AppState, AuthState>((state) => state.auth);

    const [form] = Form.useForm();

    useEffect(() => {
        const {signup: {loaded, success}} = auth;
        if (loaded && success) {
            form.resetFields();
        }
    }, [auth]);
    // 注册成功 先是成功的提示信息
    const showSuccess = () => {
        const {signup: {loaded, success}} = auth;
        if (loaded && success) {
            return <Result
                        status="success"
                        title="注册成功"
                        extra={[
                        <Button type="primary">
                            <Link to="/signin">登陆</Link>
                        </Button>,
                        ]}
                    />
        }
    }
    const showError = () => {
        const {signup: {loaded, success}} = auth;
        if (loaded && !success) {
            return <Result
                        status="warning"
                        title="注册失败"
                        subTitle={auth.signup.message}
                    />
        }
    }

    const signupForm = () => (
        <Form form={form} onFinish={onFinish}>
            <Form.Item name="name" label="昵称">
                <Input />
            </Form.Item>
            <Form.Item name="password" label="密码">
                <Input.Password />
            </Form.Item>
            <Form.Item name="email" label="邮箱">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">注册</Button>
            </Form.Item>
        </Form>
    )

    useEffect(() => {
        return () => {
            dispatch(resetSignup());
        }
    }, []);

    const onFinish = (value: SignupPayload) => {
        dispatch(signup(value));
    }

    return (
        <Layout title="注册" subtitle="欢迎注册">
          {showSuccess()}
          {showError()}
          {signupForm()}
        </Layout>
    );
}

export default Signup;
