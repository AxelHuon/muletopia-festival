'use client';
import Link from 'next/link';
import LoaderLayout from '../../layout/LoaderLayout/LoaderLayout';
import styled from 'styled-components';

const PageContent = styled.div`
  opacity: 0;
`;

export default function Home() {
  return (
    <main>
      <LoaderLayout />
      <PageContent>
        <Link href="history/">Histoire</Link>
        <div>Coucou</div>
      </PageContent>
    </main>
  );
}
