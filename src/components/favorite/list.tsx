import { Place } from '@/types/place';
import { FavoriteCard } from './card';

export type FavoritesListProps = {
  favorites: Place[];
};

export function FavoritesList(props: FavoritesListProps) {
  const favoritesInCity = new Map<string, Place[]>();
  const cities = [];
  for (const favorite of props.favorites) {
    const cityName = favorite.city.name;
    if (!favoritesInCity.has(cityName)) {
      favoritesInCity.set(cityName, []);
      cities.push(cityName);
    }
    favoritesInCity.get(cityName)!.push(favorite);
  }

  cities.sort();

  return (
    <ul className='favorites__list'>
      {cities.map((cityName) => (
        <li key={cityName} className='favorites__locations-items'>
          <div className='favorites__locations locations locations--current'>
            <div className='locations__item'>
              <a className='locations__item-link' href='#'>
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className='favorites__places'>
            {favoritesInCity.get(cityName)!.map((favorite) => (
              <FavoriteCard key={favorite.id} {...favorite} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
