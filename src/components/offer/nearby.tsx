import { Place } from '@/types/place';
import { NearbyCard } from './nearby-card';

export function Nearby({ places }: { places: Place[] }) {
  return (
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>
          Other places in the neighbourhood
        </h2>
        <div className='near-places__list places__list'>
          {places.map((place) => (
            <NearbyCard key={place.id} place={place} />
          ))}
        </div>
      </section>
    </div>
  );
}
