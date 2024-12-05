import { CitySelector } from '@/components/city/city-selector';
import { Header } from '@/components/header/header';
import Map from '@/components/map/map';
import { OfferList } from '@/components/offer/list';
import { AppRoute, CITIES } from '@/const';
import { setLoginRedirect } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Place } from '@/types/place';
import React, { useEffect } from 'react';

export default function Main() {
  const [selectedPlace, setSelectedPlace] = React.useState<Place | null>(null);
  const selectedCity = useAppSelector((state) => state.city);
  const places = useAppSelector((state) => state.places);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoginRedirect(AppRoute.Main));
  });

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <CitySelector selectedCity={selectedCity} cities={CITIES} />
        <div className='cities'>
          <div className='cities__places-container container'>
            <OfferList
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
