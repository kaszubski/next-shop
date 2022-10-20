import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductDetailSwag } from '../components/Product';

const DATA = {
  id: 1,
  title: 'Product title',
  imgUrl: 'https://picsum.photos/id/536/354',
  imgAlt: 'random_pic',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus vel diam in viverra. Aliquam erat volutpat. Integer euismod sapien eget ligula sodales, ac feugiat nunc dictum.',
  rating: 4.5,
};

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main>
        <ProductDetailSwag data={DATA} />
      </Main>
      <Footer />
    </div>
  );
}

export default Home;
