import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '@/types/offer';
import { ApiRoute } from '@/const';
import {
  addComment,
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
  setAuthorizedUser,
  setLoginError,
  addFavorite,
  removeFavorite,
} from './actions.ts';
import { Comment, NewComment } from '@/types/comment.ts';
import { AuthData, AuthorizedUser } from '@/types/user.ts';
import { writeToken } from '@/storage/token.ts';
import { Place } from '@/types/place.ts';

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
  try {
    const { data } = await api.get<Offer[]>(ApiRoute.Favorite);
    dispatch(setFavorite(data));
  } finally {
    dispatch(setFavoriteIsLoading(false));
  }
});

export const addFavoriteOffer = createAsyncThunk<
  void,
  Place,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('favorite/add', async (place, { dispatch, extra: api }) => {
  dispatch(setFavoriteIsLoading(true));
  try {
    const { data } = await api.post<Offer>(
      `${ApiRoute.Favorite}/${place.id}/1`
    );
    dispatch(addFavorite(data));
  } finally {
    dispatch(setFavoriteIsLoading(false));
  }
});

export const removeFavoriteOffer = createAsyncThunk<
  void,
  Place,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('favorite/add', async (place, { dispatch, extra: api }) => {
  dispatch(setFavoriteIsLoading(true));
  try {
    const { data } = await api.post<Offer>(
      `${ApiRoute.Favorite}/${place.id}/0`
    );
    dispatch(removeFavorite(data));
  } finally {
    dispatch(setFavoriteIsLoading(false));
  }
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
    const res = await api.get<AuthorizedUser>(ApiRoute.Login);
    dispatch(setAuthorizedUser(res.data));
  } catch {
    dispatch(setAuthorizedUser(undefined));
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
    dispatch(setCurrentOfferIsLoading(true));
    const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    dispatch(setCurrentOffer(data));
    dispatch(setCurrentOffer404(false));

    dispatch(fetchNearby(offerId));
    dispatch(fetchComments(offerId));
  } catch (error) {
    dispatch(setCurrentOffer404(true));
    dispatch(setCurrentOffer(null));
  } finally {
    dispatch(setCurrentOfferIsLoading(false));
  }
});

export const login = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  try {
    const response = await api.post<AuthorizedUser>(ApiRoute.Login, {
      email,
      password,
    });
    writeToken(response.data.token);
    dispatch(setAuthorizedUser(response.data));
    dispatch(fetchPlaces());
    dispatch(fetchFavoriteOffers());
  } catch {
    dispatch(setLoginError(true));
  }
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoute.Logout);
  writeToken(undefined);
  dispatch(setAuthorizedUser(undefined));
  dispatch(fetchPlaces());
  dispatch(setFavorite([]));
});

export const postComment = createAsyncThunk<
  void,
  NewComment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'comment/post',
  async ({ offerID, comment, rating }, { dispatch, extra: api }) => {
    dispatch(setCommentsIsLoading(true));
    try {
      const res = await api.post<Comment>(`${ApiRoute.Comments}/${offerID}`, {
        comment,
        rating,
      });
      dispatch(addComment(res.data));
    } finally {
      dispatch(setCommentsIsLoading(false));
    }
  }
);
