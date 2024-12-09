import { FavoritesList } from '@/components/favorite/list';
import { Header } from '@/components/header/header';
import Spinner from '@/components/ui/spinner/spinner';
import { AppRoute } from '@/const';
import { fetchFavoriteOffers } from '@/store/api-actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListLoader() {
  const isLoading = useAppSelector((state) => state.favoriteIsLoading);
  return isLoading ? <Spinner /> : <FavoritesList />;
}

export function Favorites() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  });

  return (
    <div className='page page--favorites-empty'>
      <Header />

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ListLoader />
          </section>
        </div>
      </main>

      <footer className='footer'>
        <Link className='footer__logo-link' to={AppRoute.Main}>
          <img
            className='footer__logo'
            src='img/logo.svg'
            alt='6 cities logo'
            width='64'
            height='33'
          />
        </Link>
      </footer>
    </div>
  );
}
