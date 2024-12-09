import { OfferSortType } from '@/const';
import { Offer } from '@/types/offer';
import { createAction } from '@reduxjs/toolkit';
import { Place } from '@/types/place';
import { Comment } from '@/types/comment';
import { City } from '@/types/city';
import { AuthorizedUser } from '@/types/user';

export const setCity = createAction<City>('city/set');
export const setOfferSortType = createAction<OfferSortType>('setOfferSort');

export const setCurrentOffer = createAction<Offer | null>('currentOffer/set');
export const setCurrentOfferIsLoading = createAction<boolean>(
  'currentOffer/setLoadingStatus'
);
export const setCurrentOffer404 = createAction<boolean>('currentOffer/set404');

export const setPlaces = createAction<Place[]>('places/set');
export const setPlacesIsLoading = createAction<boolean>(
  'places/setLoadingStatus'
);

export const setFavorite = createAction<Place[]>('favorite/set');
export const setFavoriteIsLoading = createAction<boolean>(
  'favorite/setLoadingStatus'
);
export const addFavorite = createAction<Place>('favorite/add');
export const removeFavorite = createAction<Place>('favorite/remove');

export const setNearby = createAction<Place[]>('nearby/set');
export const setNearbyIsLoading = createAction<boolean>(
  'nearby/setLoadingStatus'
);

export const setComments = createAction<Comment[]>('comments/set');
export const setCommentsIsLoading = createAction<boolean>(
  'comments/setLoadingStatus'
);
export const addComment = createAction<Comment>('comments/add');

export const setAuthorizedUser = createAction<AuthorizedUser | undefined>(
  'auth/setUser'
);

export const setLoginRedirect = createAction<string | undefined>(
  'login/setRedirect'
);

export const setLoginError = createAction<boolean>('login/setError');

export const setHoverPlace = createAction<Place | undefined>('place/hover');
