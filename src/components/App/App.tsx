import MainPage from '@/pages/Main/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/config';
import { AppRoute } from '@/config';
import LoginPage from '@/pages/Login/LoginPage';
import PageNotFound from '@/pages/404/404';
import FavoritesPage from '@/pages/Favorites/FavoritesPage';
import OfferPage from '@/pages/Offer/OfferPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

type AppProps = {
  placesCount: number;
};

export default function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placesCount={props.placesCount} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute auth={false}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
