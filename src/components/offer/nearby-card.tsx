import { Place } from '@/types/place';
import { Card } from '@/components/place/card';

export function NearbyCard({ place }: { place: Place }) {
  return (
    <article className='near-places__card place-card'>
      <div className='near-places__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img
            className='place-card__image'
            src={place.previewImage}
            width='260'
            height='200'
            alt='Place image'
          />
        </a>
      </div>
      <Card {...place} />
    </article>
  );
}
