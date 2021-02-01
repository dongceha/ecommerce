import React, {FC, useEffect} from 'react';
import { Typography, List, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/actions/category.actions';
import { AppState } from '../../store/reducers';
import { CategoryState } from '../../store/reducers/category.reducer';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
interface IProps {
    handleFilters: (args: string[]) => void;
}
const {Title, Paragraph} = Typography;
const category = [{name: 'Node', _id: 1}, {name: 'Angular', _id: 2}, {name: 'javascript', _id: 3}]
const CheckBox: FC<IProps> = (props) => {
    const dispatch = useDispatch();
    // const category = useSelector<AppState, CategoryState>(state => state.category);
    useEffect(() => {
        dispatch(getCategory());
    }, []);
    const onchange = (checkedValue: CheckboxValueType[]) => {
        props.handleFilters(checkedValue as string[]);
    }
    return (
        <>
            <Title level={4}>按照分类筛选</Title>
            <Checkbox.Group
              className="checkBoxFilter"
              options={category.map(cate => ({label: cate.name, value: cate._id}))}
              onChange={onchange}
            />
            {/* <List dataSource={category} renderItem={item => (
                <List.Item>
                    <Checkbox>{item.name}</Checkbox>
                </List.Item>
            )}/> */}
        </>
    );
}

export default CheckBox;
