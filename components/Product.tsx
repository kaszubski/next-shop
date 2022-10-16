import { Raiting } from './Raiting';

interface IProductProps {
  data: {
    title: string,
    imgUrl: string,
    imgAlt: string,
    description: string,
    rating: number
  }
}

export function Product({ data }: IProductProps) {
  return (
    <>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <img src={data.imgUrl} alt={data.imgAlt} />
      <p className="p-4">
        {data.description}
      </p>
      <Raiting raiting={data.rating} />
    </>
  );
}
