import { addFavoriteOffer, removeFavoriteOffer } from '@/store/api-actions';
import { useAppDispatch } from '@/store/store';
import { Place } from '@/types/place';
import clsx from 'clsx';

export function Card({ place }: { place: Place }) {
  const dispatch = useAppDispatch();
  return (
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro;{place.price}</b>
          <span className='place-card__price-text'>&#47;&nbsp;night</span>
        </div>
        <button
          className={clsx(
            'place-card__bookmark-button',
            'button',
            place.isFavorite && 'place-card__bookmark-button--active'
          )}
          type='button'
          onClick={() => {
            if (place.isFavorite) {
              dispatch(removeFavoriteOffer(place));
            } else {
              dispatch(addFavoriteOffer(place));
            }
          }}
        >
          <svg className='place-card__bookmark-icon' width='18' height='19'>
            <use xlinkHref='#icon-bookmark'></use>
          </svg>
          {place.isFavorite && (
            <span className='visually-hidden'>In bookmarks</span>
          )}
        </button>
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{ width: `${(place.rating / 5) * 100}%` }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <a href={`/offer/${place.id}`}>{place.title}</a>
      </h2>
      <p className='place-card__type'>{place.type}</p>
    </div>
  );
}
