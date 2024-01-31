import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

import teeshirt1Img from '../../../public/images/home/tee-shirt-1.png';
import teeshirt2Img from '../../../public/images/home/tee-shirt-2.png';
import teeshirt3Img from '../../../public/images/home/tee-shirt-3.png';
import bubblePriceImg from '../../../public/images/home/bubble-price.svg';
import anneauxImg from '../../../public/images/home/anneaux.svg';
import galaxyImg from '../../../public/images/home/galaxy.svg';
import eclairImg from '../../../public/images/home/eclair.svg';

export default function Home3() {
  useEffect(() => {
    const teeshirts = document.querySelectorAll('.teeshirt');
    teeshirts.forEach((teeshirt, index) => {
      const teeshirtImg = teeshirt.querySelector('a>img');
      const price = teeshirt.querySelector('div');

      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: '.teeshirt-container',
        start: 'top 80%',
        end: 'bottom center',
        // markers: true,
        onEnter: () => {
          gsap.to(teeshirt, {
            delay: index * 0.4,
            opacity: 1,
            duration: 1,
          });
          gsap.to(teeshirt, {
            delay: 0.3 + index * 0.4,
            ease: 'power.inOut',
            yoyo: true,
            repeat: 1,
            scale: '1.05',
            duration: 0.2,
          });
        },
      });

      teeshirt.addEventListener('mouseover', () => {
        gsap.to(teeshirtImg, {
          scale: ' 1.1',
          ease: 'power1.inOut',
          duration: 0.2,
        });
        gsap.to(price, {
          delay: 0.2,
          ease: 'power.inOut',
          yoyo: true,
          repeat: 1,
          scale: '1.2',
          duration: 0.2,
        });
      });
      teeshirt.addEventListener('mouseout', () => {
        gsap.to(teeshirtImg, {
          scale: ' 1',
          ease: 'power1.inOut',
          duration: 0.2,
        });
      });
    });
  });
  return (
    <div className="flex h-[100vh] w-full bg-home bg-repeat bg-cover relative flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Img teeshirt */}
        <div className="teeshirt-container flex justify-center items-center h-100% gap-10 w-full">
          <div className="teeshirt relative opacity-0">
            <Link href="shop/">
              <Image
                src={teeshirt1Img}
                style={{
                  minWidth: '350px',
                  width: '350px',
                }}
              />
            </Link>
            <div className="absolute -top-5 left-0 h-[80px] w-[150px] flex items-center justify-center z-30 -rotate-12">
              <Image
                src={bubblePriceImg}
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                }}
              />
              <p className="absolute text-4xl text-text_price font-tanker top-6">
                29.99$
              </p>
            </div>
            <Image
              src={anneauxImg}
              className="floating3"
              style={{
                width: '150px',
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
              }}
            />
          </div>
          <div className="teeshirt relative opacity-0">
            <Link href="shop/">
              <Image
                src={teeshirt2Img}
                style={{
                  minWidth: '350px',
                  width: '350px',
                }}
              />
            </Link>
            <div className="absolute bottom-0 left-0 h-[80px] w-[150px] flex items-center justify-center z-30 rotate-[30deg]">
              <Image
                src={bubblePriceImg}
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                }}
              />
              <p className="absolute text-4xl text-text_price font-tanker top-6">
                29.99$
              </p>
            </div>
            <Image
              src={galaxyImg}
              className="floating3"
              style={{
                width: '150px',
                position: 'absolute',
                top: '-30px',
                right: '-30px',
              }}
            />
          </div>
          <div className="teeshirt relative opacity-0">
            <Link href="shop/">
              <Image
                src={teeshirt3Img}
                style={{
                  minWidth: '350px',
                  width: '350px',
                }}
              />
            </Link>
            <div className="absolute top-4 -right-10 h-[80px] w-[150px] flex items-center justify-center z-30 rotate-12">
              <Image
                src={bubblePriceImg}
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                }}
              />
              <p className="absolute text-4xl text-text_price font-tanker top-6">
                29.99$
              </p>
            </div>
            <Image
              src={eclairImg}
              className="floating3"
              style={{
                width: '80px',
                position: 'absolute',
                bottom: '-30px',
                left: '30px',
              }}
            />
          </div>
        </div>
        <Link
          href="/shop"
          className="text-primary font-tanker text-center text-2xl m-10 underline hover:text-white"
        >
          See more
        </Link>
      </div>

      <p className="text-white font-tanker absolute bottom-0 text-center w-full text-6xl pb-12">
        GEt your mulletee shirt
      </p>
    </div>
  );
}
