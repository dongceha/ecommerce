import { PageHeader } from 'antd';
import React, { FC } from 'react';
import Navigation from './Navigation';

interface IProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

const Layout: FC<IProps> = ({children, title, subtitle}) => {
    return (
        <div>
            <Navigation />
            <PageHeader title={title} subTitle={subtitle} />
            <div style={{width: '85%', margin: '0 auto'}}>{children}</div>
        </div>
    );
}

export default Layout;
