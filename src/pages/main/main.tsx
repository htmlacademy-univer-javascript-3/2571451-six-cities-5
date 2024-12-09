import { CitySelector } from '@/components/city/city-selector';
import { Header } from '@/components/header/header';
import Map from '@/components/map/map';
import { OfferList } from '@/components/offer/list';
import { AppRoute } from '@/const';
import { setLoginRedirect } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useEffect } from 'react';

function MainMap() {
  const selectedCity = useAppSelector((state) => state.city);
  const places = useAppSelector((state) => state.places);
  const hoverPlace = useAppSelector((state) => state.hoverPlace);

  return (
    <Map
      location={selectedCity.location}
      places={places}
      hoverPlace={hoverPlace}
    />
  );
}

export default function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoginRedirect(AppRoute.Main));
  });

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
