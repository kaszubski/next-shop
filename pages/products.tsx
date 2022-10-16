import { InferGetStaticPropsType } from 'next';
import { Product } from '../components/Product';

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products/');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
}

function ProductsPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => (
        <li key={product.id} className="shadow-xl border-2">
          <Product data={
        {
          title: product.title,
          imgUrl: product.image,
          imgAlt: product.title,
          description: product.description,
          rating: product.rating.rate,
        }
      }
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductsPage;
