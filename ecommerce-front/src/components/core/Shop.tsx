import { Col, Row, Space } from 'antd';
import Checkbox from './CheckBox';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import RadioBox from './RadioBox';
import { filterProduct } from '../../store/actions/product.actions';
import { AppState } from '../../store/reducers';
import { ProductState } from '../../store/reducers/product.reducer';
import ProductItem from './ProductItem';

const Shop = () => {
    const dispatch = useDispatch();
    const [myFilters, setMyFilters] = useState<{
        category: string[], 
        price: number[]
    }>({category: [], price: []});

    const product = useSelector<AppState, ProductState>(state => state.product);

    useEffect(() => {
        dispatch(filterProduct({filters: myFilters, skip: 0}))
    }, [myFilters]);
    const filterDom = () => (
        <Space size="middle" direction="vertical">
          <Checkbox handleFilters={(filters: string[]) => {
              setMyFilters({
                  ...myFilters,
                  category: filters,
              });
          }}/>
          <RadioBox handleFilters={(filters: number[]) => {
              setMyFilters({
                  ...myFilters,
                  price: filters,
              });
          }} />
        </Space>
    )
    const productDOM = () => (
        <Row gutter={[16, 16]}>
            {
                product.filter.result.data.map(item => (
                    <Col span="6">
                        <ProductItem product={item}></ProductItem>
                    </Col>
                ))
            }
        </Row>
    )
    return (
        <Layout title="拉钩商城" subtitle="挑选你喜欢的商品吧">
            <Row>
                <Col span="4">{filterDom()}</Col>
                <Col span="20">{productDOM()}</Col>
            </Row>
        </Layout>
    );
}

export default Shop;
