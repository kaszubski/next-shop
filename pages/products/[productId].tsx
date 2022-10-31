/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import { ProductDetails } from '../../components/Product';
import { TInferGetStaticPathsType } from '../../types';
import { MarkdownResult } from '../../utils';

export interface IStoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  longDescription: MarkdownResult;
  rating: {
    rate: number;
    count: number;
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://naszsklep-api.vercel.app/api/products');
  const data: IStoreApiResponse[] = (await res.json()) as IStoreApiResponse[];

  return {
    paths: data.map((product) => ({
      params: {
        productId: product.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<TInferGetStaticPathsType<typeof getStaticPaths>>) {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params?.productId}`);
  const data: IStoreApiResponse | null = (await res.json()) as IStoreApiResponse | null;

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data,
        longDescription: await serialize(data.longDescription as unknown as string),
      },
    },
  };
}

function ProductIdPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!data) {
    return <div>Nie bangla mate :( </div>;
  }
  return (
    <div>
      <Link href="/products">
        <a>BACK</a>
      </Link>
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          imgUrl: data.image,
          imgAlt: data.title,
          description: data.description,
          longDescription: data.longDescription,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
}

export default ProductIdPage;
