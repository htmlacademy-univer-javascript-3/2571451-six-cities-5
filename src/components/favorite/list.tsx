import { Place } from '@/types/place';
import { FavoriteCard } from './card';
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCity } from '@/store/actions';
import { AppRoute, CITIES } from '@/const';
import { useNavigate } from 'react-router-dom';

export function FavoritesList() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite);

  const { favoritesInCity, cities } = useMemo(() => {
    const fav = new Map<string, Place[]>();
    const cit = [];
    for (const favorite of favorites) {
      const cityName = favorite.city.name;
      if (!fav.has(cityName)) {
        fav.set(cityName, []);
        cit.push(cityName);
      }
      fav.get(cityName)!.push(favorite);
    }

    cit.sort();

    return { favoritesInCity: fav, cities: cit };
  }, [favorites]);

  const navigate = useNavigate();

  return (
    <ul className='favorites__list'>
      {cities.map((cityName) => (
        <li key={cityName} className='favorites__locations-items'>
          <div className='favorites__locations locations locations--current'>
            <div className='locations__item'>
              <button
                className='locations__item-link'
                role='link'
                onClick={() => {
                  dispatch(setCity(CITIES.find((c) => c.name === cityName)!));
                  navigate(AppRoute.Main);
                }}
              >
                <span>{cityName}</span>
              </button>
            </div>
          </div>
          <div className='favorites__places'>
            {favoritesInCity.get(cityName)!.map((favorite) => (
              <FavoriteCard key={favorite.id} place={favorite} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
