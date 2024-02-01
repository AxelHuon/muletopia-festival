import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SplitText } from 'gsap/SplitText';
import bubble1Img from '../../../public/images/home/bubble-joke.png';
import bubble2Img from '../../../public/images/home/bubble-home.png';
import doubleSwingShape from '../../../public/images/home/shape-double-swing.png';
import fluwuHeartShape from '../../../public/images/home/shape-fluwu-heart.png';
import trianglesShape from '../../../public/images/home/shape-triangles.png';
import mouthImg from '../../../public/images/home/mouth.svg';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Home2() {
  useGSAP(
    () => {
      const titles = document.querySelectorAll('.joke-text');
      const bubbles = document.querySelectorAll('.joke-bubble');
      const title1Split = new SplitText(titles[0], { type: 'chars' });
      const title2Split = new SplitText(titles[1], { type: 'chars' });
      gsap.set([...title1Split.chars, ...title2Split.chars], {
        opacity: 0,
        y: 50,
      });
      ScrollTrigger.create({
        trigger: titles[0],
        start: 'top 80%',
        end: 'bottom center',
        once: true,
        onEnter: () => {
          gsap.to(title1Split.chars, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'back',
            stagger: 0.1,
            delay: 0.4,
          });
          gsap.to(title2Split.chars, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'back',
            stagger: 0.1,
            delay: 0.7,
          });
          gsap.fromTo(
            bubbles[0],
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              scale: '1.05',
              delay: 0.5,
            }
          );
          gsap.fromTo(
            bubbles[1],
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              scale: '1.05',
              delay: 1,
            }
          );
          gsap.fromTo(
            bubbles[2],
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              scale: '1.05',
              delay: 1.5,
            }
          );
        },
      });
    },
    { scope: '.joke-text' }
  );
  return (
    <div className="flex h-[110vh] pt-20 w-full bg-home_2 overflow-hidden bg-repeat bg-cover relative flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-20">
        <div className="relative joke-bubble opacity-0">
          <div className="relative w-[700px] h-[250px] flex items-center justify-center">
            <Image
              src={bubble2Img}
              alt="bubble-shape"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
            <p className="absolute text-4xl text-text_black font-tanker -mt-10 px-20">
              Hey, tu as entendu parler de la coupe mulet qui a gagné un
              concours ?
            </p>
          </div>
          <Image
            src={doubleSwingShape}
            alt="double-swing-shape"
            className="floating2"
            style={{
              width: '150px',
              position: 'absolute',
              top: '-30px',
              right: '-50px',
            }}
          />
        </div>
        <p className="text-9xl text-white font-tanker joke-text mb-10">
          A LIttle
        </p>
      </div>

      <div className="flex items-center justify-center gap-20">
        <p className="text-9xl text-white font-tanker joke-text mb-10">
          JOKE ?
        </p>
        <div className="relative joke-bubble opacity-0">
          <div className="relative bottom-[-150px] left-[500px]">
            <Image
              src={mouthImg}
              alt="mouth"
              className="floating2"
              style={{
                width: '300px',
                position: 'absolute',
              }}
            />
            <Image
              src={trianglesShape}
              alt="triangles-shape"
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
              alt="bubble-shape"
              style={{
                minWidth: '350px',
                width: '500px',
                height: '200px',
                position: 'relative',
              }}
            />
            <p className="absolute text-4xl text-text_black font-tanker -mt-10 px-20">
              Non, quelle coupe mulet ?
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-20 mr-[250px]">
        <div className="relative joke-bubble opacity-0">
          <div className="relative w-[700px] h-[250px] flex items-center justify-center">
            <Image
              src={bubble2Img}
              alt="bubble-shape"
              style={{
                minWidth: '350px',
                width: '100%',
                height: '100%',
              }}
            />
            <p className="absolute text-4xl text-text_black font-tanker -mt-10 px-20">
              Celle qui était bien partie derrière, mais qui a fini par
              remporter le prix devant !
            </p>
          </div>
          <Image
            src={fluwuHeartShape}
            alt="fluwu-heart-shape"
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
