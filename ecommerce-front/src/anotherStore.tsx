import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import { itemCount } from './components/core/Cart';

export const TotalContext = React.createContext<[number, Dispatch<SetStateAction<number>>]>([0, () => null]);
interface IProps {
    children: React.ReactNode
}
const AnotherStore: FC<IProps> = ({children}) => {
    const [count, setCount] = useState(itemCount());
    return (
        <TotalContext.Provider value={[count, setCount]}>{children}</TotalContext.Provider>
    );
}

export default AnotherStore;
