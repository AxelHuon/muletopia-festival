'use client';
import styled from 'styled-components';
import Link from 'next/link';

const PageContent = styled.div``;

const Home = () => {
  return (
    <section>
      {/*      <LoaderLayout />*/}
      <PageContent>
        <Link href={'/contest'}>contest</Link>
        <div>Coucou</div>
      </PageContent>
    </section>
  );
};

export default Home;
