import { Navigate } from 'react-router-dom';
import { AppRoute } from '@/const';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setLoginRedirect } from '@/store/actions';

type PrivateRouteProps = {
  redirect?: string;
  children: JSX.Element;
};

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const auth = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  if (auth) {
    return props.children;
  }

  dispatch(setLoginRedirect(props.redirect));
  return <Navigate to={AppRoute.Login} />;
}
