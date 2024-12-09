import {
  sortedOffersSelector,
  useAppDispatch,
  useAppSelector,
} from '@/store/store';
import { OfferCard } from './card';
import { SortSelector } from './sort-selector';
import Spinner from '../ui/spinner/spinner';
import { setHoverPlace } from '@/store/actions';

export function OfferList() {
  const isLoading = useAppSelector((state) => state.placesIsLoading);
  const selectedCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  const offersInSelectedCity = useAppSelector(sortedOffersSelector);

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>
        {offersInSelectedCity.length} places to stay in {selectedCity.name}
      </b>
      <SortSelector />
      <div className='cities__places-list places__list tabs__content'>
        {isLoading && <Spinner />}
        {!isLoading &&
          offersInSelectedCity.map((offer) => (
            <div
              key={offer.id}
              onMouseEnter={() => dispatch(setHoverPlace(offer))}
              onMouseLeave={() => dispatch(setHoverPlace(undefined))}
            >
              <OfferCard place={offer} />
            </div>
          ))}
      </div>
    </section>
  );
}
