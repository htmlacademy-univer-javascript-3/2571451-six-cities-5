import { CitySelector } from '@/components/city/city-selector';
import Map from '@/components/map/map';
import { OfferList } from '@/components/offer/list';
import TetrisLoader from '@/components/ui/spinner/spinner';
import { CITIES } from '@/const';
import { useAppSelector } from '@/store/store';
import { Place } from '@/types/place';
import React from 'react';

export default function Main() {
  const [selectedPlace, setSelectedPlace] = React.useState<Place | null>(null);
  const selectedCity = useAppSelector((state) => state.city);
  const places = useAppSelector((state) => state.places);

  return (
    <div className='page page--gray page--main'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link header__logo-link--active'>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a
                    className='header__nav-link header__nav-link--profile'
                    href='#'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      Oliver.conner@gmail.com
                    </span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <CitySelector selectedCity={selectedCity} cities={CITIES} />
        <div className='cities'>
          <div className='cities__places-container container'>
            <OfferList
              selectedOffer={selectedPlace}
              setSelectedOffer={setSelectedPlace}
              selectedCity={selectedCity.name}
            />
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  location={selectedCity.location}
                  places={places}
                  selectedPlace={selectedPlace}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
