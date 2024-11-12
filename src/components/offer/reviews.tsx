import { Comment } from '@/types/comment';
import { Review } from './review';

export function Reviews({ comments }: { comments: Comment[] }) {
  return (
    <ul className='reviews__list'>
      {comments.map((comment) => (
        <Review key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
