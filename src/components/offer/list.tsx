import { useAppSelector } from '@/store/store';
import { OfferCard } from './card';
import { Place } from '@/types/place';
import { OfferSortType } from '@/const';
import { SortSelector } from './sort-selector';

export interface OfferListProps {
  offers: Place[];
  selectedOffer: Place | null;
  setSelectedOffer: (offer: Place | null) => void;
  selectedCity: string;
}

export function OfferList(props: OfferListProps) {
  const offerSortType = useAppSelector((state) => state.offerSortType);

  const offersInSelectedCity = props.offers
    .filter((offer) => offer.city.name === props.selectedCity)
    .sort((a, b) => {
      switch (offerSortType) {
        case 'Popular':
          return 0;
        case 'Price: low to high':
          return a.price - b.price;
        case 'Price: high to low':
          return b.price - a.price;
        case 'Top rated first':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {offersInSelectedCity.length} places to stay in {props.selectedCity}
      </b>
      <SortSelector
        sortTypes={Object.entries(OfferSortType).map(
          ([, sortType]) => sortType
        )}
        selectedSortType={offerSortType}
      />
      <div className='cities__places-list places__list tabs__content'>
        {offersInSelectedCity.map((offer) => (
          <div
            key={offer.id}
            onMouseEnter={() => props.setSelectedOffer(offer)}
            onMouseLeave={() => props.setSelectedOffer(null)}
          >
            <OfferCard {...offer} />
          </div>
        ))}
      </div>
    </section>
  );
}
