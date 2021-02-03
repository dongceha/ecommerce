import { Button, Card, Typography, Row, Col } from 'antd';
import { push } from 'connected-react-router';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../../helpers/cart';
import { Product } from '../../store/modules/product';

const {Title, Paragraph} = Typography;

interface Props {
    product?: Product;
    showViewProduct?: boolean;
    showCartButton?: boolean;
}

const ProductItem: FC<Props> = ({product, showViewProduct = true, showCartButton = true}) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        product && addItem(product, () => {
            dispatch(push('/cart'));
        })
    }
    const showButtons = () => {
        let buttonArray = [];
        if (showViewProduct) 
            buttonArray.push(
                <Button type="link">
                    <Link to="/product/123">查看详情</Link>
                </Button>
            )
        if (showCartButton) 
            buttonArray.push(
                <Button type="link"  onClick={addToCart}>加入购物车</Button>
            )
        return buttonArray;
    }
    return (
        <Card
          cover={
              <img alt="example" src="https://p1.ssl.qhimg.com/t0175877d7d3007f3f5.png"/>
          }
          actions={showButtons()}
        >
            <Title level={5}>测试商品名称</Title>
            <Paragraph ellipsis={{rows: 2}}>测试商品描述</Paragraph>
            <Row>
                <Col span="12">销量</Col>
                <Col span="12" style={{textAlign: 'right'}}>价格</Col>
            </Row>
            <Row>
                <Col span="12">上家时间</Col>
                <Col span="12" style={{textAlign: 'right'}}>所属分类</Col>
            </Row>
        </Card>
    );
}

export default ProductItem;
