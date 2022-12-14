import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from '../components/Product';
import { IStoreApiResponse } from '../types';

export async function getStaticProps() {
  const res = await fetch('https://naszsklep-api.vercel.app/api/products/');
  const data: IStoreApiResponse[] = await res.json() as IStoreApiResponse[];

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
          <ProductListItem data={
        {
          id: product.id,
          title: product.title,
          imgUrl: product.image,
          imgAlt: product.title,
          description: product.description,
        }
      }
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductsPage;
