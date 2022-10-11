import { Raiting } from './Raiting';

interface IProductProps {
  data: {
    imgUrl: string,
    imgAlt: string,
    description: string,
    rating: number
  }
}

export function Product({ data }: IProductProps) {
  return (
    <>
      <img src={data.imgUrl} alt={data.imgAlt} />
      <p>
        {data.description}
      </p>
      <Raiting raiting={data.rating} />
    </>
  );
}
