import Layout from '../core/Layout';
import React, {useState, useEffect} from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { API } from '../../config';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/modules/auth';
import { Link } from 'react-router-dom';

const AddCategory = () => {

    const [name, setName] = useState<string>('');
    const { user, token } = isAuth() as Jwt;

    useEffect(() => {
        async function addCategory() {
            try {
                 let response = await axios.post<{name: string}>(`${API}/category/create/${user._id}`, {
                    name,
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                message.success(`[${response.data.name}]`)
            } catch (error) {
                message.error(error.response.data.error);
            }
            if (name) {
                addCategory();
            }
        }
    }, [name]);
    const onFinish = (value: {name: string}) => {
        setName(value.name);
    }
    return (
        <div>
            <Layout title="添加分类" subtitle="">
                <Form onFinish={onFinish}>
                    <Form.Item name="name" label="分类名称">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">添加分类</Button>
                    </Form.Item>
                    <Button>
                        <Link to="/admin/dashboard">返回danshboard</Link>
                    </Button>
                </Form>
            </Layout>
        </div>
    );
}

export default AddCategory;
