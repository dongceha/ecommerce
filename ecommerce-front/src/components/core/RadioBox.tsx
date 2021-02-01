import React, { FC } from 'react';
import { Typography, List, Checkbox, Radio } from 'antd';
import { prices } from '../../helpers/price';
import { RadioChangeEvent } from 'antd/lib/radio';

interface IProps {
    handleFilters: (arg: number[]) => void;
}
const {Title, Paragraph} = Typography;

const RadioBox: FC<IProps> = ({handleFilters}) => {
    const onChange = (event: RadioChangeEvent) => {
        handleFilters(event.target.value);
    }
    return (
        <>
            <Title level={4}>按照价格筛选</Title>
            <Radio.Group>
                <List dataSource={prices} renderItem={item => (
                    <List.Item>
                        <Radio onChange={onChange} value={item.array}>{item.name}</Radio>
                    </List.Item>
                )}/>
            </Radio.Group>
        </>
    );
}

export default RadioBox;
