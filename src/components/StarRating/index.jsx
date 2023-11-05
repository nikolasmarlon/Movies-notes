
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Star, StarContainer } from './styles';

export function StarRating({ nota }) {
    const rating = Math.min(Math.max(nota, 1), 5);
  
    const stars = Array.from({ length: 5 }, ( _, i) => (
      <Star key={i} isFilled={i < rating}>
        {i < rating ? <AiFillStar /> : <AiOutlineStar />}
      </Star>
    ));
  
    return <StarContainer>{stars}</StarContainer>;
  }