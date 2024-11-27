import { setCity } from '@/store/actions';
import { City } from '@/types/city';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';

export function CitySelector({
  cities,
  selectedCity,
}: {
  cities: City[];
  selectedCity: City;
}) {
  const dispatch = useDispatch();
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map((city) => (
            <li key={city.name} className='locations__item'>
              <a
                className={clsx(
                  'locations__item-link tabs__item',
                  city === selectedCity && 'tabs__item--active'
                )}
                onClick={() => dispatch(setCity(city))}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
