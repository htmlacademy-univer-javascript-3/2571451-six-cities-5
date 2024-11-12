import { Link } from 'react-router-dom';
import { Card } from '@/components/place/card';

export interface FavoriteCardProps {
  id: string;
  title: string;
  price: number;
  type: string;
  rating: number;
  previewImage: string;
  isPremium: boolean;
}

export function FavoriteCard(props: FavoriteCardProps) {
  return (
    <article className='favorites__card place-card'>
      {props.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${props.id}`}>
          <img
            className='place-card__image'
            src={props.previewImage}
            width='150'
            height='110'
            alt='Place image'
          />
        </Link>
      </div>
      <Card {...props} isFavorite />
    </article>
  );
}
