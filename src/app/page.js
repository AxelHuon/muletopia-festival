'use client';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import HomeHero from './home/HomeHero';
import HomeJoke from './home/HomeJoke';
import HomeShop from './home/HomeShop';
import LoaderLayout from '../../layout/LoaderLayout/LoaderLayout';

const PageContent = styled.div`
  opacity: 1;
`;

export default function Home() {
  useEffect(() => {
    // Float animation shape
    const floatings = document.querySelectorAll('.floating');
    const floatings2 = document.querySelectorAll('.floating2');
    const floatings3 = document.querySelectorAll('.floating3');

    const floatAnimation = (el) => {
      el.forEach((floating, index) => {
        gsap.to(floating, {
          y: `-=${10 * (index + 1)}`,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          duration: 2 * (index + 1),
        });
      });
    };

    floatAnimation(floatings);
    floatAnimation(floatings2);
    floatAnimation(floatings3);
  });

  return (
    <main className="w-full bg-primary">
      <LoaderLayout />
      <PageContent>
        <HomeHero />
        <HomeJoke />
        <HomeShop />
      </PageContent>
    </main>
  );
}
