import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import bubble1Img from '../../../public/images/home/bubble-joke.png';
import bubble2Img from '../../../public/images/home/bubble-home.png';
import doubleSwingShape from '../../../public/images/home/shape-double-swing.png';
import fluwuHeartShape from '../../../public/images/home/shape-fluwu-heart.png';
import trianglesShape from '../../../public/images/home/shape-triangles.png';
import mouthImg from '../../../public/images/home/mouth.svg';

export default function Home2() {
  useEffect(() => {
    const titles = document.querySelectorAll('.joke-text');
    const bubbles = document.querySelectorAll('.joke-bubble');

    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: titles[0],
      start: 'top 80%',
      end: 'bottom center',
      // markers: true,
      onEnter: () => {
        tl.to(titles[0], {
          opacity: 1,
          duration: 0.5,
          x: 0,
        })
          .to(titles[1], {
            opacity: 1,
            duration: 0.5,
            x: 0,
          })
          .to(bubbles[0], {
            delay: 0.5,
            opacity: 1,
            duration: 0.5,
            scale: '1.05',
          })
          .to(bubbles[0], {
            delay: 0.2,
            ease: 'power.inOut',
            scale: '1',
            duration: 0.2,
          })
          .to(bubbles[1], {
            opacity: 1,
            duration: 0.5,
            scale: '1.05',
          })
          .to(bubbles[1], {
            delay: 0.2,
            ease: 'power.inOut',
            scale: '1',
            duration: 0.2,
          })
          .to(bubbles[2], {
            opacity: 1,
            duration: 0.5,
            scale: '1.05',
          })
          .to(bubbles[2], {
            delay: 0.2,
            ease: 'power.inOut',
            scale: '1',
            duration: 0.2,
          });
      },
    });
  });
  return (
    <div className="flex h-[110vh] pt-20 w-full bg-home_2 bg-repeat bg-cover relative flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-20">
        <div className="relative joke-bubble opacity-0">
          <div className="relative w-[700px] h-[250px] flex items-center justify-center">
            <Image
              src={bubble2Img}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
            <p className="absolute text-4xl text-text_black font-tanker -mt-10 px-20">
              Hey, tu as entendu parler de la coupe mulet qui a gagné un
              concours?
            </p>
          </div>
          <Image
            src={doubleSwingShape}
            className="floating2"
            style={{
              width: '150px',
              position: 'absolute',
              top: '-30px',
              right: '-50px',
            }}
          />
        </div>
        <p className="text-9xl text-white font-tanker joke-text opacity-0 translate-x-8 mb-10">
          A LIttle
        </p>
      </div>

      <div className="flex items-center justify-center gap-20">
        <p className="text-9xl text-white font-tanker joke-text opacity-0 -translate-x-8 mb-10">
          JOKE ?
        </p>
        <div className="relative joke-bubble opacity-0">
          <div className="relative bottom-[-150px] left-[500px]">
            <Image
              src={mouthImg}
              className="floating2"
              style={{
                width: '300px',
                position: 'absolute',
              }}
            />
            <Image
              src={trianglesShape}
              className="floating2"
              style={{
                width: '130px',
                position: 'absolute',
                bottom: '-200px',
                left: '-50px',
              }}
            />
          </div>
          <div className="relative w-[700px] h-[220px] flex items-center justify-center">
            <Image
              src={bubble1Img}
              style={{
                minWidth: '350px',
                width: '500px',
                height: '200px',
                position: 'relative',
              }}
            />
            <p className="absolute text-4xl text-text_black font-tanker -mt-10 px-20">
              Non, quelle coupe mulet?
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-20 mr-[250px]">
        <div className="relative joke-bubble opacity-0">
          <div className="relative w-[700px] h-[250px] flex items-center justify-center">
            <Image
              src={bubble2Img}
              style={{
                minWidth: '350px',
                width: '100%',
                height: '100%',
              }}
            />
            <p className="absolute text-4xl text-text_black font-tanker -mt-10 px-20">
              Celle qui était bien partie derrière, mais qui a fini par
              remporter le prix devant!
            </p>
          </div>
          <Image
            src={fluwuHeartShape}
            className="floating2"
            style={{
              width: '150px',
              position: 'absolute',
              top: '-50px',
              left: '-100px',
            }}
          />
        </div>
      </div>
    </div>
  );
}
