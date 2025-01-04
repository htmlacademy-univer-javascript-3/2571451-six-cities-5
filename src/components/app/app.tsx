import Main from '@/pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/const';
import { AppRoute } from '@/const';
import Login from '@/pages/login/login';
import PageNotFound from '@/pages/404/404';
import { Favorites } from '@/pages/favorites/favorites';
import Offer from '@/pages/offer/offer';
import PrivateRoute from '@/components/private-route/private-route';
import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  checkAuth,
  fetchFavoriteOffers,
  fetchPlaces,
} from '@/store/api-actions';
import { useEffect } from 'react';

export default function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchFavoriteOffers());
    }
  }, [user, dispatch]);

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute redirect={AppRoute.Favorites}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
