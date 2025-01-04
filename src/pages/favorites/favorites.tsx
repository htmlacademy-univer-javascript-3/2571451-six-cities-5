import { FavoritesList } from '@/components/favorite/list';
import { Header } from '@/components/header/header';
import Spinner from '@/components/ui/spinner/spinner';
import { AppRoute } from '@/const';
import { useAppSelector } from '@/store/store';

import { Link } from 'react-router-dom';

function Empty() {
  return (
    <div className='page page--favorites-empty'>
      <Header />

      <main className='page__main page__main--favorites page__main--favorites-empty'>
        <div className='page__favorites-container container'>
          <section className='favorites favorites--empty'>
            <h1 className='visually-hidden'>Favorites (empty)</h1>
            <div className='favorites__status-wrapper'>
              <b className='favorites__status'>Nothing yet saved.</b>
              <p className='favorites__status-description'>
                Save properties to narrow down search or plan your future trips.
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className='footer'>
        <a className='footer__logo-link' href='main.html'>
          <img
            className='footer__logo'
            src='img/logo.svg'
            alt='6 cities logo'
            width='64'
            height='33'
          />
        </a>
      </footer>
    </div>
  );
}

export function Favorites() {
  const isLoading = useAppSelector((state) => state.favoriteIsLoading);
  const favorite = useAppSelector((state) => state.favorite);

  if (!isLoading && favorite.length === 0) {
    return <Empty />;
  }

  return (
    <div className='page'>
      <Header signoutRedirect={AppRoute.Main} />

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <main className='page__main page__main--favorites'>
            <div className='page__favorites-container container'>
              <section className='favorites'>
                <h1 className='favorites__title'>Saved listing</h1>
                {isLoading && favorite.length === 0 ? (
                  <Spinner />
                ) : (
                  <FavoritesList />
                )}
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
      </main>
    </div>
  );
}
