import { Place } from '@/types/place';
import { Link } from 'react-router-dom';
import { FavoriteButton } from './favorite-button';

export function Card({ place }: { place: Place }) {
  return (
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro;{place.price}</b>
          <span className='place-card__price-text'>&#47;&nbsp;night</span>
        </div>
        <FavoriteButton
          place={place}
          className='place-card__bookmark-button'
          classNameActive='place-card__bookmark-button--active'
        />
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{ width: `${(place.rating / 5) * 100}%` }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <Link to={`/offer/${place.id}`}>{place.title}</Link>
      </h2>
      <p className='place-card__type'>{place.type}</p>
    </div>
  );
}
