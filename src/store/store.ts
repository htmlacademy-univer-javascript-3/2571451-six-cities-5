import { CITIES, OfferSortType } from '@/const';
import {
  setCity,
  setOfferSortType,
  setCurrentOffer,
  setCurrentOfferIsLoading,
  setCurrentOffer404,
  setPlaces,
  setPlacesIsLoading,
  setFavorite,
  setFavoriteIsLoading,
  setNearby,
  setNearbyIsLoading,
  setComments,
  setCommentsIsLoading,
  addComment,
  setAuthorizedUser,
  setLoginRedirect,
  setLoginError,
  addFavorite,
  removeFavorite,
  setHoverPlace,
} from './actions';
import { Offer } from '@/types/offer';
import { Place } from '@/types/place';
import { Comment } from '@/types/comment';
import {
  configureStore,
  createReducer,
  createSelector,
} from '@reduxjs/toolkit';
import { create } from '@/api/api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { City } from '@/types/city';
import { AuthorizedUser } from '@/types/user';

export type State = {
  city: City;
  offerSortType: OfferSortType;
  currentOffer: Offer | null;
  currentOfferIsLoading: boolean;
  currentOffer404: boolean;
  places: Place[];
  placesIsLoading: boolean;
  favorite: Place[];
  favoriteIsLoading: boolean;
  nearby: Place[];
  nearbyIsLoading: boolean;
  comments: Comment[];
  commentsIsLoading: boolean;
  user?: AuthorizedUser;
  loginError: boolean;
  loginRedirectsTo?: string;
  hoverPlace?: Place;
};

const initialState: State = {
  city: CITIES[0],
  offerSortType: OfferSortType.Popular,
  currentOffer: null,
  currentOfferIsLoading: false,
  currentOffer404: false,
  places: [],
  placesIsLoading: false,
  favorite: [],
  favoriteIsLoading: false,
  nearby: [],
  nearbyIsLoading: false,
  comments: [],
  commentsIsLoading: false,
  loginError: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOfferSortType, (state, action) => {
      state.offerSortType = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setCurrentOfferIsLoading, (state, action) => {
      state.currentOfferIsLoading = action.payload;
    })
    .addCase(setCurrentOffer404, (state, action) => {
      state.currentOffer404 = action.payload;
    })
    .addCase(setPlaces, (state, action) => {
      state.places = action.payload;
    })
    .addCase(setPlacesIsLoading, (state, action) => {
      state.placesIsLoading = action.payload;
    })
    .addCase(setFavorite, (state, action) => {
      state.favorite = action.payload;
    })
    .addCase(setFavoriteIsLoading, (state, action) => {
      state.favoriteIsLoading = action.payload;
    })
    .addCase(setNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(setNearbyIsLoading, (state, action) => {
      state.nearbyIsLoading = action.payload;
    })
    .addCase(setCommentsIsLoading, (state, action) => {
      state.commentsIsLoading = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments = [...state.comments, action.payload];
    })
    .addCase(setAuthorizedUser, (state, action) => {
      const user = action.payload;
      state.user = user;
      state.loginError = false;
    })
    .addCase(setLoginRedirect, (state, action) => {
      state.loginRedirectsTo = action.payload;
    })
    .addCase(setLoginError, (state, action) => {
      state.loginError = action.payload;
    })
    .addCase(addFavorite, (state, action) => {
      state.favorite = [...state.favorite, action.payload];
      action.payload.isFavorite = true;
    })
    .addCase(removeFavorite, (state, action) => {
      state.favorite = state.favorite.filter((f) => f.id !== action.payload.id);
      action.payload.isFavorite = false;
    })
    .addCase(setHoverPlace, (state, action) => {
      state.hoverPlace = action.payload;
    });
});

const api = create();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<typeof store.dispatch>;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export const sortedOffersSelector = createSelector(
  [
    (state: State) => state.offerSortType,
    (state: State) => state.places,
    (state: State) => state.city,
  ],
  (sortType, places, city) =>
    places
      .filter((offer) => offer.city.name === city.name)
      .sort((a, b) => {
        switch (sortType) {
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
      })
);
