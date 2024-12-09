import { FavoritesList } from '@/components/favorite/list';
import { Header } from '@/components/header/header';
import Spinner from '@/components/ui/spinner/spinner';
import { useAppSelector } from '@/store/store';

export function Favorites() {
  const favorite = useAppSelector((state) => state.favorite);
  const isLoading = useAppSelector((state) => state.favoriteIsLoading);

  return (
    <div className='page page--favorites-empty'>
      <Header />

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            {isLoading ? <Spinner /> : <FavoritesList favorites={favorite} />}
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
