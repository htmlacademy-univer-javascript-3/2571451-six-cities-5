import { SORT_TYPES } from '@/const';
import { setOfferSortType } from '@/store/actions';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export function SortSelector() {
  const [sortSelectorOpen, setSortSelectorOpen] = useState(false);
  const selectedSortType = useAppSelector((state) => state.offerSortType);
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
        {SORT_TYPES.map((sortType) => (
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
