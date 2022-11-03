/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { MDXRemote } from 'next-mdx-remote';
import { Raiting } from './Raiting';
import { MarkdownResult } from '../utils';

interface IProductDetails {
  id: number;
  title: string;
  imgUrl: string;
  imgAlt: string;
  description: string;
  longDescription?: MarkdownResult;
  rating: number;
}

interface IProductDetailsProps {
  data: IProductDetails;
}

export function ProductDetails({ data }: IProductDetailsProps) {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://next-shop-olive.vercel.app/products/${data.id}`}
      />
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <Image
        src={data.imgUrl}
        alt={data.imgAlt}
        layout="responsive"
        width={4}
        height={3}
        objectFit="contain"
      />
      <article className="prose lg:prose-xl">
        {data.longDescription && <MDXRemote {...data.longDescription} />}
        {/* {'[link](/products/2)'} */}
      </article>
      <Raiting raiting={data.rating} />
    </>
  );
}

type TProductListItem = Pick<IProductDetails, 'id' | 'title' | 'imgUrl' | 'imgAlt' | 'description' | 'longDescription'>;

interface IProductListItemProps {
  data: TProductListItem;
}

export function ProductListItem({ data }: IProductListItemProps) {
  return (
    <>
      <div className="bg-white p-4">
        <Image
          src={data.imgUrl}
          alt={data.imgAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
          <p className="p-4">{data.description}</p>
        </a>
      </Link>
    </>
  );
}
