import { useQuery } from '@tanstack/react-query';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ProductDetails } from '../components/Product';

export interface IStoreApiResponse {
  id: number;
  title: string;
  price: number;
  longDescription: MDXRemoteSerializeResult<Record<string, unknown>>;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProducts() {
  const res = await fetch('https://naszsklep-api.vercel.app/api/products/');
  const data: IStoreApiResponse[] = await res.json() as IStoreApiResponse[];
  return data;
}

function ProductsCSRPage() {
  const { data, isLoading, error } = useQuery(['products'], getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Damn bratan, something nie dziala po bozemu :(</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => (
        <li key={product.id} className="shadow-xl border-2">
          <ProductDetails data={
        {
          id: product.id,
          title: product.title,
          imgUrl: product.image,
          imgAlt: product.title,
          longDescription: product.longDescription,
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

export default ProductsCSRPage;
