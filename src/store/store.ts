import { configureStore, createReducer } from '@reduxjs/toolkit';
import { setCity, setOfferSortType } from './actions';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { CITIES, OfferSortType } from '@/const';

const initialState = { city: CITIES[0], offerSortType: OfferSortType.Popular };
const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(setOfferSortType, (state, action) => {
    state.offerSortType = action.payload;
  });
});

export const store = configureStore({ reducer });
export const useAppDispatch = useDispatch<typeof store.dispatch>;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
