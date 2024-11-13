import Main from '@/pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/config';
import { AppRoute } from '@/config';
import Login from '@/pages/login/login';
import PageNotFound from '@/pages/404/404';
import { Favorites } from '@/pages/favorites/favorites';
import Offer from '@/pages/offer/offer';
import PrivateRoute from '@/components/private-route/private-route';
import {
  places as mockPlaces,
  favorites as mockFavorites,
} from '@/mocks/places';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main offers={mockPlaces} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute auth>
                <Favorites offers={mockFavorites} />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
