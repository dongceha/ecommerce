import { Button, Card, Typography, Row, Col } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../store/modules/product';

const {Title, Paragraph} = Typography;

interface Props {
    product?: Product
}

const ProductItem: FC<Props> = () => {
    return (
        <Card
          cover={
              <img alt="example" src="https://p1.ssl.qhimg.com/t0175877d7d3007f3f5.png"/>
          }
          actions={[
              <Button type="link">
                  <Link to="">查看详情</Link>
              </Button>,
              <Button type="link">
                  <Link to="">加入购物车</Link>
              </Button>,
          ]}
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
