import { Link } from 'react-router-dom';
import { Card } from '@/components/place/card';
import { Place } from '@/types/place';

export function FavoriteCard({ place }: { place: Place }) {
  return (
    <article className='favorites__card place-card'>
      {place.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${place.id}`}>
          <img
            className='place-card__image'
            src={place.previewImage}
            width='150'
            height='110'
            alt='Place image'
          />
        </Link>
      </div>
      <Card place={place} />
    </article>
  );
}
