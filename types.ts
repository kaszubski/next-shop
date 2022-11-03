import { MarkdownResult } from './utils';

export type TInferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export interface IStoreApiResponse {
  id: number;
  title: string;
  price: number;
  longDescription: MarkdownResult;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
