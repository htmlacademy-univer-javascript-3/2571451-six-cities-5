import { AppRoute } from '@/const';
import { logout } from '@/store/api-actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = React.memo(() => (
  <img
    className='header__logo'
    src='img/logo.svg'
    alt='6 cities logo'
    width='81'
    height='41'
  />
));

Logo.displayName = 'Logo';

function Nav() {
  const favorite = useAppSelector((state) => state.favorite);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        <li className='header__nav-item user'>
          <Link
            to={AppRoute.Favorites}
            className='header__nav-link header__nav-link--profile'
          >
            <div className='header__avatar-wrapper user__avatar-wrapper'>
              {user && (
                <img
                  className='user__avatar'
                  src={user.avatarUrl}
                  alt='avatar'
                />
              )}
            </div>
            {user && (
              <>
                <span className='header__user-name user__name'>
                  {user.email}
                </span>
                <span className='header__favorite-count'>
                  {favorite?.length ?? 0}
                </span>
              </>
            )}
          </Link>
          {!user && (
            <Link to={AppRoute.Login}>
              <span className='header__login'>Sign in</span>
            </Link>
          )}
        </li>
        {user && (
          <li className='header__nav-item'>
            <a
              className='header__nav-link'
              onClick={() => void dispatch(logout())}
            >
              <span className='header__signout'>Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link
              className='header__logo-link header__logo-link--active'
              to={AppRoute.Main}
            >
              <Logo />
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
}
