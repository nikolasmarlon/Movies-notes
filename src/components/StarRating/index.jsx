
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function StarRating({ nota }) {
  const rating = Math.min(Math.max(nota, 0), 5);

  const stars = Array.from({ length: 5 }, (v, i) => {
    if (i < rating) {
      return <AiFillStar key={i} color="${( {theme} ) => theme.COLORS.RED_300}" />;
    } else {
      return <AiOutlineStar key={i} color="none" />;
    }
  });

  return (
        <span>
            {stars}
        </span>
    )
}