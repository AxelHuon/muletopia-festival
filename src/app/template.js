'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);
export default function Template({ children }) {
  useGSAP((context, contextSafe) => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div>{children}</div>
      </div>
    </div>
  );
}
