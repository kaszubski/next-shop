import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-teal-100">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
        <img src="https://picsum.photos/id/536/354" alt="random_pic" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus vel diam in viverra.
          Aliquam erat volutpat. Integer euismod sapien eget ligula sodales, ac feugiat nunc dictum.
          Pellentesque vitae vestibulum ante. Ut ut accumsan mi, sed pharetra ante.
          Aliquam placerat sem pulvinar, efficitur metus quis, molestie neque.
          Vivamus ante urna, rhoncus vel mauris sed, vehicula egestas mauris.
          Morbi at ex in magna dictum ullamcorper.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
