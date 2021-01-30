import React from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';

const Shop = () => {
    const state = useSelector((state) => state)
    return (
        <Layout title="拉钩商城" subtitle="挑选你喜欢的商品吧">
            SHOP {JSON.stringify(state)}
        </Layout>
    );
}

export default Shop;
