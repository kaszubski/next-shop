import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-teal-100">
      <Header />
      <main className="mx-auto w-full max-w-md flex-grow">Content</main>
      <Footer />
    </div>
  );
}

export default Home;
