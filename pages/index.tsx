import { Main } from '../components/Main';
import { ProductDetailSwag } from '../components/Product';

const DATA = {
  id: 1,
  title: 'Product title',
  imgUrl: 'https://picsum.photos/id/536/354',
  imgAlt: 'random_pic',
  longDescription: 'Essa',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus vel diam in viverra. Aliquam erat volutpat. Integer euismod sapien eget ligula sodales, ac feugiat nunc dictum.',
  rating: 4.5,
};

function Home() {
  return (
    <Main>
      <ProductDetailSwag data={DATA} />
    </Main>
  );
}

export default Home;
