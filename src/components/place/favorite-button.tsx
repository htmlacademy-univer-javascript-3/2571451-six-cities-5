import { addFavoriteOffer, removeFavoriteOffer } from '@/store/api-actions';
import { useAppDispatch } from '@/store/store';
import { Place } from '@/types/place';
import clsx from 'clsx';
import { useState } from 'react';

export function FavoriteButton({
  place,
  className,
}: {
  place: Place;
  className?: string;
}) {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(place.isFavorite);

  return (
    <button
      className={clsx(
        'button',
        isFavorite && 'place-card__bookmark-button--active',
        className
      )}
      type='button'
      onClick={() => {
        if (isFavorite) {
          dispatch(removeFavoriteOffer(place));
        } else {
          dispatch(addFavoriteOffer(place));
        }
        setIsFavorite(!isFavorite);
      }}
    >
      <svg className='place-card__bookmark-icon' width='18' height='19'>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      {place.isFavorite && (
        <span className='visually-hidden'>In bookmarks</span>
      )}
    </button>
  );
}
