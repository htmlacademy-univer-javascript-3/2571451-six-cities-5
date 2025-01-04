import { AppRoute } from '@/const';
import { setLoginRedirect } from '@/store/actions';
import { addFavoriteOffer, removeFavoriteOffer } from '@/store/api-actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Place } from '@/types/place';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

export function FavoriteButton({
  place,
  className,
  classNameActive,
}: {
  place: Place;
  className?: string;
  classNameActive?: string;
}) {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <button
      className={clsx(
        'button',
        place.isFavorite && classNameActive,
        place.isFavorite && '',
        className
      )}
      type='button'
      onClick={() => {
        if (!user) {
          navigate(AppRoute.Login);
          return;
        }

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
  );
}
