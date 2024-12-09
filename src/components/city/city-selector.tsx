import { CITIES } from '@/const';
import { setCity } from '@/store/actions';
import { useAppSelector } from '@/store/store';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';

export function CitySelector() {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useDispatch();
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CITIES.map((city) => (
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
