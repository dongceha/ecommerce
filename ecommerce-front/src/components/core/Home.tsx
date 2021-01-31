import Search from './Search';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import ProductItem from './ProductItem';
import { Row, Col, Typography } from 'antd';
import { getProduct } from '../../store/actions/product.actions';
import { AppState } from '../../store/reducers';
import { ProductState } from '../../store/reducers/product.reducer';
const {Title, Paragraph} = Typography;
const Home = () => {
    const {createdAt, sold} = useSelector<AppState, ProductState>((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct('createdAt'));
        dispatch(getProduct('sold'));
    }, []);
    return (
        <Layout title="拉钩商城" subtitle="尽情享受吧">
            <Search />
            <Title level={5}>最新上架</Title>
            <Row gutter={[16, 16]}>
                {
                    createdAt.products.map(product => (
                        <Col span="6">
                            <ProductItem product={product}></ProductItem>
                        </Col>
                    ))
                }
                <Col span="6">
                  <ProductItem></ProductItem>
                </Col>
            </Row>
            <Title level={5}>最受欢迎</Title>
            <Row gutter={[16, 16]}>
                {
                    sold.products.map(product => (
                        <Col span="6">
                            <ProductItem product={product}></ProductItem>
                        </Col>
                    ))
                }
                <Col span="6">
                  <ProductItem></ProductItem>
                </Col>
            </Row>
        </Layout>
    );
}

export default Home;
