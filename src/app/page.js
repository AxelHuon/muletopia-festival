'use client';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Home1 from './home/home1';
import Home2 from './home/home2';
import Home3 from './home/home3';
import LoaderLayout from '../../layout/LoaderLayout/LoaderLayout';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother);
const PageContent = styled.div`
  opacity: 1;
`;

export default function Home() {
  useGSAP((context, contextSafe) => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });
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
        <Home1 />
        <Home2 />
        <Home3 />
      </PageContent>
    </main>
  );
}
