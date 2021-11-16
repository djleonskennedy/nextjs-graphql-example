import { FC } from 'react';
import { Post } from '../../graphql/api';

type Props = {
  post: Pick<Post, 'title' | 'body'>;
};

const Card: FC<Props> = ({ post: { title, body } }) => (
  <div>
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
);

export default Card;
