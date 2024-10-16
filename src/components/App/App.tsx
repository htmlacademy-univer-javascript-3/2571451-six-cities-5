import Main from '@/pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/config';
import { AppRoute } from '@/config';
import Login from '@/pages/login/login';
import PageNotFound from '@/pages/404/404';
import Favorites from '@/pages/favorites/favorites';
import Offer from '@/pages/offer/offer';
import PrivateRoute from '@/components/private-route/private-route';

type AppProps = {
  placesCount: number;
};

export default function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesCount={props.placesCount} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute auth={false}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
