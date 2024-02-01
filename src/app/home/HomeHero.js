import Link from 'next/link';
import Image from 'next/image';

import cameraImg from '../../../public/images/home/camera.png';
import scissorImg from '../../../public/images/home/scissor.png';
import coupeImg from '../../../public/images/home/coupe.png';
import dollarImg from '../../../public/images/home/dollar.png';
import livreImg from '../../../public/images/home/livre.png';
import ticketsImg from '../../../public/images/home/tickets.png';
import logoImg from '../../../public/images/home/logo.png';
import musicShape from '../../../public/images/home/shape-music.png';
import puffShape from '../../../public/images/home/shape-puff.png';
import swingShape from '../../../public/images/home/shape-swing.png';
import ziczacShape from '../../../public/images/home/shape-ziczac.png';
import fluwuShape from '../../../public/images/home/shape-fluwu.png';
import bubbleImg from '../../../public/images/home/bubble-home.png';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
gsap.registerPlugin(SplitText);
export default function HomeHero() {
  const descriptionText = useRef();
  const image1 = useRef();

  useEffect(() => {
    // Show title of links
    const links = document.querySelectorAll('.home-link');
    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        link.nextElementSibling.classList.remove('hidden');
      });
      link.addEventListener('mouseout', () => {
        link.nextElementSibling.classList.add('hidden');
      });
    });
  });

  useGSAP(
    () => {
      const descriptionSplit = new SplitText(descriptionText.current, {
        type: 'words',
      });
      gsap.set([...descriptionSplit.words], {
        opacity: 0,
        y: 50,
      });
      gsap.to(descriptionSplit.words, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'back',
        stagger: 0.1,
        delay: 3,
      });
    },
    { scope: descriptionText }
  );

  return (
    <div className=" container-global flex relative h-[100vh] w-full bg-home bg-repeat bg-cover pb-6">
      {/* Logo */}
      <Image
        src={logoImg}
        alt="muletopia-festival-logo"
        style={{
          width: '300px',
          position: 'absolute',
          top: '10%',
          left: '10%',
          transform: 'translate(-40%, -50%)',
        }}
      />

      {/* Img links */}
      <Link href="shop/" ref={image1} className="home-link">
        <Image
          src={dollarImg}
          alt="shop"
          className="hover:scale-110 hover:-hue-rotate-60 transition -rotate-12"
          style={{
            width: '200px',
            position: 'absolute',
            top: '50%',
            left: '28%',
            transform: 'translate(-50%, -50%) rotate(-15deg)',
          }}
        />
      </Link>
      <div className="home-title hidden absolute h-[100px] translate-x-5 translate-y-5 w-[200px] left-[28%] top-[17%] flex items-center justify-center z-30">
        <Image
          src={bubbleImg}
          alt="bubble-shop"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <p className="absolute text-4xl font-tanker top-5">SHOP</p>
      </div>

      <Link href="/tuto" className="home-link">
        <Image
          src={scissorImg}
          alt="tuto"
          className="hover:scale-110 transition z-20"
          style={{
            width: '200px',
            position: 'absolute',
            top: '40%',
            left: '35%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Link>

      <div className="home-title hidden absolute translate-x-5 translate-y-5 left-[35%] top-[10%] h-[100px] w-[200px] flex items-center justify-center z-30">
        <Image
          src={bubbleImg}
          alt="tuto-bubble"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <p className="absolute text-4xl font-tanker top-5">TUTORIALS</p>
      </div>

      <Link href="/get-your-mullet" className="home-link">
        <Image
          src={cameraImg}
          alt="photo-gallery"
          className="hover:scale-110 hover:-hue-rotate-60 transition -rotate-12 z-10"
          style={{
            width: '300px',
            position: 'absolute',
            top: '50%',
            left: '43%',
            transform: 'translate(-50%, -50%) rotate(-10deg)',
          }}
        />
      </Link>

      <div className="home-title hidden absolute translate-x-5 translate-y-5 left-[45%] top-[22%] h-[100px] w-[250px] flex items-center justify-center z-30">
        <Image
          src={bubbleImg}
          alt="photo-gallery-bubble"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <p className="absolute text-4xl font-tanker top-5 uppercase">PHOTO</p>
      </div>

      <Link href="" className="home-link">
        <Image
          src={coupeImg}
          alt="contest"
          className="hover:scale-110 transition hover:-hue-rotate-60"
          style={{
            width: '350px',
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Link>

      <div className="home-title hidden absolute translate-x-5 translate-y-5 left-[59%] top-[1%] h-[100px] w-[200px] flex items-center justify-center z-30">
        <Image
          src={bubbleImg}
          alt="contest-bubble"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <p className="absolute text-4xl font-tanker top-5">CONTESTS</p>
      </div>

      <Link href="ticketing/" className="home-link">
        <Image
          src={ticketsImg}
          alt="ticketing"
          className="hover:scale-110 transition z-10"
          style={{
            width: '250px',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            left: '57%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Link>

      <div className="home-title hidden absolute translate-x-5 translate-y-5 left-[60%] top-[20%] h-[100px] w-[200px] flex items-center justify-center z-30">
        <Image
          src={bubbleImg}
          alt="ticketing-bubble"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <p className="absolute text-4xl font-tanker top-5">TICKETING</p>
      </div>

      <Link href="history/" className="home-link">
        <Image
          src={livreImg}
          alt="history"
          className="hover:scale-110 hover:-hue-rotate-30 transition"
          style={{
            width: '350px',
            height: 'auto',
            position: 'absolute',
            top: '55%',
            left: '65%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Link>

      <div className="home-title hidden absolute translate-x-5 translate-y-5 left-[70%] top-[30%] h-[100px] w-[200px] flex items-center justify-center z-30">
        <Image
          src={bubbleImg}
          alt="history-bubble"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <p className="absolute text-4xl font-tanker top-5">HISTORY</p>
      </div>

      {/* SHAPES */}
      <Image
        src={musicShape}
        alt="music-shape"
        className="floating"
        style={{
          position: 'absolute',
          top: '0px',
          right: '0px',
        }}
      />

      <Image
        src={puffShape}
        alt="puff-shape"
        className="floating"
        style={{
          position: 'absolute',
          width: '150px',
          height: 'auto',
          top: '150px',
          left: '950px',
        }}
      />

      <Image
        src={swingShape}
        alt="swing-shape"
        className="floating"
        style={{
          position: 'absolute',
          width: '150px',
          height: 'auto',
          top: '250px',
          left: '0px',
        }}
      />

      <Image
        src={ziczacShape}
        alt="ziczac-shape"
        className="floating"
        style={{
          position: 'absolute',
          width: '200px',
          height: 'auto',
          top: '50px',
          left: '500px',
        }}
      />

      <Image
        src={fluwuShape}
        alt="fluwu-shape"
        className="floating"
        style={{
          position: 'absolute',
          width: '150px',
          height: 'auto',
          bottom: '80px',
          right: '30px',
        }}
      />
      <p
        ref={descriptionText}
        className="text-white font-tanker self-end text-center w-full text-6xl p-4"
      >
        Rock the Mullet Fest: Unleash Your Inner Party in the Back !
      </p>
    </div>
  );
}
