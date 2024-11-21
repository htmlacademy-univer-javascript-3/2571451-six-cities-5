import { OfferCard } from './card';
import { Place } from '@/types/place';

export interface OfferListProps {
  offers: Place[];
  selectedOffer: Place | null;
  setSelectedOffer: (offer: Place | null) => void;
  selectedCity: string;
}

export function OfferList(props: OfferListProps) {
  const offersInSelectedCity = props.offers.filter(
    (offer) => offer.city.name === props.selectedCity
  );

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {offersInSelectedCity.length} places to stay in {props.selectedCity}
      </b>
      <form className='places__sorting' action='#' method='get'>
        <span className='places__sorting-caption'>Sort by</span>
        <span className='places__sorting-type' tabIndex={0}>
          Popular
          <svg className='places__sorting-arrow' width='7' height='4'>
            <use xlinkHref='#icon-arrow-select'></use>
          </svg>
        </span>
        <ul className='places__options places__options--custom places__options--opened'>
          <li className='places__option places__option--active' tabIndex={0}>
            Popular
          </li>
          <li className='places__option' tabIndex={0}>
            Price: low to high
          </li>
          <li className='places__option' tabIndex={0}>
            Price: high to low
          </li>
          <li className='places__option' tabIndex={0}>
            Top rated first
          </li>
        </ul>
      </form>
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