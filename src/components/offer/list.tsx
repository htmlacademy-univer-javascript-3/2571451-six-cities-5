import { useAppSelector } from '@/store/store';
import { OfferCard } from './card';
import { Place } from '@/types/place';
import { OfferSortType } from '@/const';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOfferSortType } from '@/store/actions';

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

  const [sortSelectorOpen, setSortSelectorOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {offersInSelectedCity.length} places to stay in {props.selectedCity}
      </b>
      <form className='places__sorting' action='#' method='get'>
        <span className='places__sorting-caption'>Sort by</span>
        <span
          className='places__sorting-type'
          tabIndex={0}
          onClick={() => setSortSelectorOpen(!sortSelectorOpen)}
        >
          {offerSortType}
          <svg className='places__sorting-arrow' width='7' height='4'>
            <use xlinkHref='#icon-arrow-select'></use>
          </svg>
        </span>
        <ul
          className={clsx(
            'places__options places__options--custom',
            sortSelectorOpen && 'places__options--opened'
          )}
        >
          {Object.entries(OfferSortType).map(([, sortType]) => (
            <li
              key={sortType}
              className={clsx(
                'places__option',
                sortType === offerSortType && 'places__option--active'
              )}
              tabIndex={0}
              onClick={() => {
                setSortSelectorOpen(false);
                dispatch(setOfferSortType(sortType));
              }}
            >
              {sortType}
            </li>
          ))}
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
