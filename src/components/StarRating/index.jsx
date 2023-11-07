
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Star, StarContainer } from './styles'

export function StarRating({ nota, tamanho = 20 }) {
    const rating = Math.min(Math.max(nota, 1), 5);
  
    const stars = Array.from({ length: 5 }, ( _, i) => (
      <Star key={i}>

        {/** forma uma arrai: e cada volta do loop, faz uma comparação -> se o rating (classificação)  for menor que o indice, então adiciona o icone preenchido, se for maior, adicona o icone vazio*/}
        {i < rating ? <AiFillStar size={tamanho} /> : <AiOutlineStar size={tamanho} />}
      </Star>
    ))
  
    return (
      <StarContainer>
        {stars}
      </StarContainer>
    )
  }