/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Raiting } from './Raiting';

interface IProductDetails {
  id: number,
  title: string,
  imgUrl: string,
  imgAlt: string,
  description: string,
  rating: number
}

interface IProductDetailsProps {
  data: IProductDetails
}

export function ProductDetails({ data }: IProductDetailsProps) {
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

type TProductListItem = Pick<IProductDetails, 'id' | 'title' | 'imgUrl' | 'imgAlt'>;

interface IProductListItemProps {
  data: TProductListItem
}

export function ProductListItem({ data }: IProductListItemProps) {
  return (
    <>
      <img src={data.imgUrl} alt={data.imgAlt} />
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
        </a>
      </Link>
    </>
  );
}
