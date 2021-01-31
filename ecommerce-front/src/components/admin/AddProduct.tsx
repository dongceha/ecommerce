import Layout from '../core/Layout';
import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload, Button, Input, Select, Form, message } from 'antd';
import { useDispatch, useSelector,  } from 'react-redux';
import { getCategory } from '../../store/actions/category.actions';
import { AppState } from '../../store/reducers';
import { CategoryState } from '../../store/reducers/category.reducer';
import { RcFile } from 'antd/lib/upload';
import axios from 'axios';
import { API } from '../../config';

const AddProduct = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState<RcFile>();
    const category = useSelector<AppState, CategoryState>(state => state.category)
    useEffect(() => {
        dispatch(getCategory());
    }, []);
    // const { user}
    const onFinish = (product: any) => {
        const formData = new FormData();
        for (const attr in product) {
            if (Object.prototype.hasOwnProperty.call(product, attr)) {
                const element = product[attr];
                formData.set(attr, element);
            }
        }
        if (typeof file !== 'undefined') {
            formData.set('photo', file);
        }
        axios.post(`${API}/product/create/:userId`, formData, {
            headers: {
                'Authorization': `Bearer ${123}`
            }
        }).then(() => {
            message.success('商品添加成功');
        }).catch(() => {
            message.warning('商品添加失败');
        })
    }
    const addProductForm = () => {
        const props = {
            accept: 'image/*',
            beforeUpload: (file: RcFile) => {
                setFile(file);
                return false;
            }
        }
        return (
        <Layout title="添加商品" subtitle="">
            <Form 
                initialValues={{
                    category: ''
                }}
                onFinish={onFinish}
            >
                <Form.Item>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>商品封面</Button>
                    </Upload>
                </Form.Item>
                <Form.Item name="name" label="商品名称">
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="商品描述">
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="商品价格">
                    <Input />
                </Form.Item>
                <Form.Item name="category" label="所属分类">
                    <Select>
                        <Select.Option value="">请选择分类</Select.Option>
                        <Select.Option value="1">测试分类</Select.Option>
                        {
                            category.category.result.map(result => (
                                <Select.Option value={result._id}>{result.name}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="quantity" label="商品数量">
                    <Input />
                </Form.Item>
                <Form.Item name="shipping" label="是否需要运输">
                <Select>
                        <Select.Option value="1">是</Select.Option>
                        <Select.Option value="0">否</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">添加商品</Button>
                </Form.Item>
            </Form>
        </Layout>
        )
    }
    return (
        <>
        {addProductForm()}
        </>
    );
}

export default AddProduct;
