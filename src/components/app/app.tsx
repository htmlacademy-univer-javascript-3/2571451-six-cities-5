import Main from '@/pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/const';
import { AppRoute } from '@/const';
import Login from '@/pages/login/login';
import PageNotFound from '@/pages/404/404';
import { Favorites } from '@/pages/favorites/favorites';
import Offer from '@/pages/offer/offer';
import PrivateRoute from '@/components/private-route/private-route';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { fetchPlaces } from '@/store/api-actions';

export default function App() {
  store.dispatch(fetchPlaces());
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute auth>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
