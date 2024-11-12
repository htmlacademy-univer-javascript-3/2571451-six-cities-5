import { Link } from 'react-router-dom';
import { Card } from '../place/card';

export interface OfferCardProps {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
}

export function OfferCard(props: OfferCardProps): JSX.Element {
  return (
    <article className='cities__card place-card'>
      {props.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${props.id}`}>
          <img
            className='place-card__image'
            src={props.previewImage}
            width='260'
            height='200'
            alt='Place image'
          />
        </Link>
      </div>
      <Card {...props} />
    </article>
  );
}
