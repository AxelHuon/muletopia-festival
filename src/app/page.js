import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href="history/">Histoire</Link>
      <div className="font-bold p-4">Coucou</div>
    </main>
  );
}
