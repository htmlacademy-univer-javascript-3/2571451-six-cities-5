import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '@/types/offer';
import { ApiRoute, AuthorizationStatus } from '@/const';
import {
  addComment,
  requireAuthorization,
  setPlaces,
  setPlacesIsLoading,
  setComments,
  setCommentsIsLoading,
  setCurrentOffer,
  setCurrentOffer404,
  setCurrentOfferIsLoading,
  setFavorite,
  setFavoriteIsLoading,
  setNearby,
  setNearbyIsLoading,
} from './actions.ts';
import { Comment } from '@/types/comment.ts';

export const fetchPlaces = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('places/fetch', async (_arg, { dispatch, extra: api }) => {
  dispatch(setPlacesIsLoading(true));
  const { data } = await api.get<Offer[]>(ApiRoute.Offers);
  dispatch(setPlaces(data));
  dispatch(setPlacesIsLoading(false));
});

export const fetchFavoriteOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('favorite/fetch', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFavoriteIsLoading(true));
  const { data } = await api.get<Offer[]>(ApiRoute.Favorite);
  dispatch(setFavoriteIsLoading(false));
  dispatch(setFavorite(data));
});

export const fetchNearby = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('nearby/fetch', async (offerId, { dispatch, extra: api }) => {
  dispatch(setNearbyIsLoading(true));
  const { data } = await api.get<Offer[]>(
    `${ApiRoute.Offers}/${offerId}/nearby`
  );
  dispatch(setNearbyIsLoading(false));
  dispatch(setNearby(data));
});

export const fetchComments = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('comments/fetch', async (offerId, { dispatch, extra: api }) => {
  dispatch(setCommentsIsLoading(true));
  const { data } = await api.get<Comment[]>(`${ApiRoute.Comments}/${offerId}`);
  dispatch(setCommentsIsLoading(false));
  dispatch(setComments(data));
});

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(ApiRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.Unauthorized));
  }
});

export const fetchCurrentOffer = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('currentOffer/fetch', async (offerId, { dispatch, extra: api }) => {
  try {
    dispatch(setCurrentOfferIsLoading(false));
    const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    dispatch(setCurrentOfferIsLoading(true));
    dispatch(setCurrentOffer(data));
    dispatch(setCurrentOffer404(false));

    dispatch(fetchNearby(offerId));
    dispatch(fetchComments(offerId));
  } catch (error) {
    dispatch(setCurrentOffer404(true));
  }
});

export const postComment = createAsyncThunk<
  void,
  { offerId: string; comment: string; rating: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'comments/post',
  async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<Comment>(
      `${ApiRoute.Comments}/${offerId}`,
      {
        comment,
        rating,
      }
    );
    dispatch(addComment(data));
  }
);
