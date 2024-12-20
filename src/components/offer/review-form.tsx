import { postComment } from '@/store/api-actions';
import { useAppDispatch } from '@/store/store';
import { NewComment } from '@/types/comment';
import React, { ChangeEvent, FormEvent } from 'react';

export function ReviewForm({ offerID }: { offerID: string }) {
  const [reviewData, setReviewData] = React.useState({
    rating: '',
    review: '',
  });

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setReviewData({
      ...reviewData,
      rating: evt.target.value,
    });
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewData({
      ...reviewData,
      review: evt.target.value,
    });
  };

  const dispatch = useAppDispatch();

  const submit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(
      postComment({
        offerID,
        comment: reviewData.review,
        rating: parseInt(reviewData.rating, 10),
      } as NewComment)
    );
  };

  return (
    <form className='reviews__form form' onSubmit={submit}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='5'
          id='5-stars'
          type='radio'
          checked={reviewData.rating === '5'}
          onChange={handleRatingChange}
        />
        <label
          htmlFor='5-stars'
          className='reviews__rating-label form__rating-label'
          title='perfect'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='4'
          id='4-stars'
          type='radio'
          checked={reviewData.rating === '4'}
          onChange={handleRatingChange}
        />
        <label
          htmlFor='4-stars'
          className='reviews__rating-label form__rating-label'
          title='good'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='3'
          id='3-stars'
          type='radio'
          checked={reviewData.rating === '3'}
          onChange={handleRatingChange}
        />
        <label
          htmlFor='3-stars'
          className='reviews__rating-label form__rating-label'
          title='not bad'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='2'
          id='2-stars'
          type='radio'
          checked={reviewData.rating === '2'}
          onChange={handleRatingChange}
        />
        <label
          htmlFor='2-stars'
          className='reviews__rating-label form__rating-label'
          title='badly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='1'
          id='1-star'
          type='radio'
          checked={reviewData.rating === '1'}
          onChange={handleRatingChange}
        />
        <label
          htmlFor='1-star'
          className='reviews__rating-label form__rating-label'
          title='terribly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={reviewData.review}
        onChange={handleReviewChange}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={reviewData.rating === '' || reviewData.review.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
