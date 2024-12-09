import { ReviewForm } from '@/components/offer/review-form';
import { Reviews } from '@/components/offer/reviews';
import Map from '@/components/map/map';
import { Nearby } from '@/components/offer/nearby';
import { Header } from '@/components/header/header';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setLoginRedirect } from '@/store/actions';
import { AppRoute } from '@/const';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { fetchCurrentOffer } from '@/store/api-actions';
import Spinner from '@/components/ui/spinner/spinner';
import { useEffect } from 'react';
import { FavoriteButton } from '@/components/place/favorite-button';

function NearbyOffers() {
  const nearby = useAppSelector((state) => state.nearby);
  const nearbyLoading = useAppSelector((state) => state.nearbyIsLoading);

  if (nearbyLoading) {
    return <Spinner />;
  }
  return <Nearby places={nearby} />;
}

function NearbyMap() {
  const offer = useAppSelector((state) => state.currentOffer);
  const nearby = useAppSelector((state) => state.nearby);
  const offerLoading = useAppSelector((state) => state.currentOfferIsLoading);
  const nearbyLoading = useAppSelector((state) => state.nearbyIsLoading);

  if (nearbyLoading || offerLoading || offer === null) {
    return <Spinner />;
  }

  return <Map location={offer.location} places={nearby} hoverPlace={offer} />;
}

function ReviewsLoader() {
  const reviews = useAppSelector((state) => state.comments);
  const reviewsLoading = useAppSelector((state) => state.commentsIsLoading);

  return (
    <>
      <h2 className='reviews__title'>
        Reviews &middot;{' '}
        <span className='reviews__amount'>{reviews.length}</span>
      </h2>
      {reviewsLoading ? <Spinner /> : <Reviews comments={reviews} />}
    </>
  );
}

export default function Offer(): JSX.Element {
  const offer = useAppSelector((state) => state.currentOffer);

  const offerLoading = useAppSelector((state) => state.currentOfferIsLoading);
  const is404 = useAppSelector((state) => state.currentOffer404);

  const descriptions = offer?.description.split('\n');

  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  if (!id || is404) {
    navigate(AppRoute.NotFound);
  }

  useEffect(() => {
    dispatch(fetchCurrentOffer(id!));
    dispatch(setLoginRedirect(AppRoute.Offer.replace(':id', id!)));
  }, [dispatch, id]);

  return (
    <div className='page'>
      <Header />

      <main className='page__main page__main--offer'>
        {!offerLoading && offer !== null ? (
          <>
            <section className='offer'>
              <div className='offer__gallery-container container'>
                <div className='offer__gallery'>
                  {offer.images.map((image) => (
                    <div className='offer__image-wrapper' key={image}>
                      <img
                        className='offer__image'
                        src={image}
                        alt='Photo studio'
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='offer__container container'>
                <div className='offer__wrapper'>
                  {offer.isPremium && (
                    <div className='offer__mark'>
                      <span>Premium</span>
                    </div>
                  )}
                  <div className='offer__name-wrapper'>
                    <h1 className='offer__name'>{offer.title}</h1>
                    {user && (
                      <FavoriteButton
                        place={offer}
                        className='offer__bookmark-button'
                      />
                    )}
                  </div>
                  <div className='offer__rating rating'>
                    <div className='offer__stars rating__stars'>
                      <span style={{ width: `${(offer.rating / 5) * 100}%` }} />
                      <span className='visually-hidden'>Rating</span>
                    </div>
                    <span className='offer__rating-value rating__value'>
                      {offer.rating}
                    </span>
                  </div>
                  <ul className='offer__features'>
                    <li className='offer__feature offer__feature--entire'>
                      {offer.type}
                    </li>
                    <li className='offer__feature offer__feature--bedrooms'>
                      {offer.bedrooms} Bedrooms
                    </li>
                    <li className='offer__feature offer__feature--adults'>
                      Max {offer.maxAdults} adults
                    </li>
                  </ul>
                  <div className='offer__price'>
                    <b className='offer__price-value'>&euro;{offer.price}</b>
                    <span className='offer__price-text'>&nbsp;night</span>
                  </div>
                  {offer.goods.length > 0 && (
                    <div className='offer__inside'>
                      <h2 className='offer__inside-title'>
                        What&apos;s inside
                      </h2>
                      <ul className='offer__inside-list'>
                        {offer.goods.map((good) => (
                          <li className='offer__inside-item' key={good}>
                            {good}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className='offer__host'>
                    <h2 className='offer__host-title'>Meet the host</h2>
                    <div className='offer__host-user user'>
                      <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                        <img
                          className='offer__avatar user__avatar'
                          src={offer.host.avatarUrl}
                          width='74'
                          height='74'
                          alt='Host avatar'
                        />
                      </div>
                      <span className='offer__user-name'>
                        {offer.host.name}
                      </span>
                      {offer.host.isPro && (
                        <span className='offer__user-status'>Pro</span>
                      )}
                    </div>
                    {descriptions && descriptions.length > 0 && (
                      <div className='offer_descriptions'>
                        {descriptions.map((description) => (
                          <p key={description} className='offer__text'>
                            {description}
                          </p>
                        ))}
                      </div>
                    )}
                    <section className='offer__reviews reviews'>
                      <ReviewsLoader />
                      {user && <ReviewForm offerID={id!} />}
                    </section>
                  </div>
                </div>
              </div>
              <section className='offer__map map'>
                <NearbyMap />
              </section>
            </section>
            <NearbyOffers />
          </>
        ) : (
          <Spinner />
        )}

        {is404 && <Navigate to={AppRoute.NotFound} />}
      </main>
    </div>
  );
}
