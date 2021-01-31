import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuth } from '../../helpers/auth';

interface IProps extends RouteProps{
    component: React.ComponentType<any>
}

const PrivateRoute: FC<IProps> = ({component: Component, ...rest}) => {

    return (
        <Route
          {...rest}
          render={props => {
              const auth = isAuth();
            //   if (auth) {
                  return <Component {...props} />
            //   }
              return <Redirect to="/signin"/>
          }
        }></Route>
    );
}

export default PrivateRoute;
