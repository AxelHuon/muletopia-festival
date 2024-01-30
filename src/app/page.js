import Link from 'next/link';
import { Colors } from '@/theme/Colors';

export default function Home() {
  return (
    <main>
      <Link href="history/">Histoire</Link>
      <div className="font-bold p-4">Coucou</div>
    </main>
  );
}
