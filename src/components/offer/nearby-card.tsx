import { Place } from '@/types/place';
import { Card } from '@/components/place/card';
import { Link } from 'react-router-dom';

export function NearbyCard({ place }: { place: Place }) {
  return (
    <article className='near-places__card place-card'>
      <div className='near-places__image-wrapper place-card__image-wrapper'>
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
