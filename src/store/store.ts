import { configureStore, createReducer } from '@reduxjs/toolkit';
import { setCity } from './actions';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { CITIES } from '@/config';

const initialState = { city: CITIES[0] };
const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
});

export const store = configureStore({ reducer });
export const useAppDispatch = useDispatch<typeof store.dispatch>;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
