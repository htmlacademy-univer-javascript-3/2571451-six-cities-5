import { OfferSortType } from '@/const';
import { setOfferSortType } from '@/store/actions';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export function SortSelector({
  sortTypes,
  selectedSortType,
}: {
  sortTypes: OfferSortType[];
  selectedSortType: OfferSortType;
}) {
  const [sortSelectorOpen, setSortSelectorOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span
        className='places__sorting-type'
        tabIndex={0}
        onClick={() => setSortSelectorOpen(!sortSelectorOpen)}
      >
        {selectedSortType}
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
        {sortTypes.map((sortType) => (
          <li
            key={sortType}
            className={clsx(
              'places__option',
              sortType === selectedSortType && 'places__option--active'
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
  );
}
