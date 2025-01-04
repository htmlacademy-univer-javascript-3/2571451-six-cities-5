import { Place } from '@/types/place';
import { FavoriteCard } from './card';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCity } from '@/store/actions';
import { AppRoute, CITIES } from '@/const';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const FavoritesInCity = React.memo(
  ({ cityName, favorites }: { cityName: string; favorites: Place[] }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
      <li className='favorites__locations-items'>
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
          {favorites.map((favorite) => (
            <FavoriteCard key={favorite.id} place={favorite} />
          ))}
        </div>
      </li>
    );
  },
  (prev, next) =>
    prev.cityName === next.cityName &&
    prev.favorites.length === next.favorites.length &&
    prev.favorites.every((value, index) => value === next.favorites[index])
);

FavoritesInCity.displayName = 'FavoritesInCity';

export function FavoritesList() {
  const favorites = useAppSelector((state) => state.favorite);

  const favoritesInCity = new Map<string, Place[]>();
  const cities = [];
  for (const favorite of favorites) {
    const city = favorite.city;
    if (!favoritesInCity.has(city.name)) {
      favoritesInCity.set(city.name, []);
      cities.push(city.name);
    }
    favoritesInCity.get(city.name)!.push(favorite);
  }

  cities.sort();

  return (
    <ul className='favorites__list'>
      {cities.map((cityName) => (
        <FavoritesInCity
          key={cityName}
          cityName={cityName}
          favorites={favoritesInCity.get(cityName)!}
        />
      ))}
    </ul>
  );
}
