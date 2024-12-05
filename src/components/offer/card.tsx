import { Link } from 'react-router-dom';
import { Card } from '../place/card';
import { Place } from '@/types/place';

export function OfferCard({ place }: { place: Place }): JSX.Element {
  return (
    <article className='cities__card place-card'>
      {place.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${place.id}`}>
          <img
            className='place-card__image'
            src={place.previewImage}
            width='260'
            height='200'
            alt='Place image'
          />
        </Link>
      </div>
      <Card place={place} />
    </article>
  );
}
