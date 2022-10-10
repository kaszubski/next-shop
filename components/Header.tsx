import Link from 'next/link';

export function Header() {
  return (
    <header className="max-w-5xl mx-auto w-full">
      <nav className="bg-gray-700 px-4 py-2 text-white">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
