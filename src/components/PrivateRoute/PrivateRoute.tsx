import { Navigate } from 'react-router-dom';
import { AppRoute } from '@/config';

type PrivateRouteProps = {
  auth: boolean;
  children: JSX.Element;
};

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  return props.auth ? props.children : <Navigate to={AppRoute.Login} />;
}
