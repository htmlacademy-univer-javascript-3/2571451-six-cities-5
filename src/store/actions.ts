import { OfferSortType } from '@/const';
import { createAction } from '@reduxjs/toolkit';

export const setCity = createAction<string>('setCity');
export const setOfferSortType = createAction<OfferSortType>('setOfferSort');
