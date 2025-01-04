import { CitySelector } from '@/components/city/city-selector';
import { Header } from '@/components/header/header';
import Map from '@/components/map/map';
import { OfferList } from '@/components/offer/list';
import { AppRoute } from '@/const';
import { setLoginRedirect } from '@/store/actions';
import {
  placesEmptySelector,
  useAppDispatch,
  useAppSelector,
} from '@/store/store';
import { useEffect } from 'react';

function MainMap() {
  const selectedCity = useAppSelector((state) => state.city);
  const places = useAppSelector((state) => state.places).filter(
    (p) => p.city.name === selectedCity.name
  );
  const hoverPlace = useAppSelector((state) => state.hoverPlace);

  return (
    <Map
      location={selectedCity.location}
      places={places}
      hoverPlace={hoverPlace}
    />
  );
}

function Empty() {
  const currentCityName = useAppSelector((state) => state.city.name);

  return (
    <div className='cities__places-container cities__places-container--empty container'>
      <section className='cities__no-places'>
        <div className='cities__status-wrapper tabs__content'>
          <b className='cities__status'>No places to stay available</b>
          <p className='cities__status-description'>
            We could not find any property available at the moment in{' '}
            {currentCityName}
          </p>
        </div>
      </section>
      <div className='cities__right-section'></div>
    </div>
  );
}

export default function Main() {
  const placesEmpty = useAppSelector(placesEmptySelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoginRedirect(AppRoute.Main));
  });

  if (placesEmpty) {
    return (
      <div className='page page--gray page--main'>
        <Header />
        <main className='page__main page__main--index page__main--index-empty'>
          <h1 className='visually-hidden'>Cities</h1>
          <CitySelector />
          <Empty />
        </main>
      </div>
    );
  }

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <CitySelector />
        <div className='cities'>
          <div className='cities__places-container container'>
            <OfferList />
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <MainMap />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
