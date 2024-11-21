import { setCity } from '@/store/actions';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';

export function CitySelector({
  cities,
  selectedCity,
}: {
  cities: string[];
  selectedCity: string;
}) {
  const dispatch = useDispatch();
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map((city) => (
            <li key={city} className='locations__item'>
              <a
                className={clsx(
                  'locations__item-link tabs__item',
                  city === selectedCity && 'tabs__item--active'
                )}
                onClick={() => dispatch(setCity(city))}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
