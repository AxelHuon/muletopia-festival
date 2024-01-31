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
import { useEffect } from 'react';

export default function Home1() {
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
  return (
    <div className="flex h-[100vh] w-full bg-home bg-repeat bg-cover">
      {/* Logo */}
      <Image
        src={logoImg}
        alt="muletopia-festival-logo"
        style={{
          width: '300px',
          position: 'absolute',
          top: '20px',
          left: '20px',
        }}
      />

      {/* Img links */}
      <Link href="shop/" className="home-link">
        <Image
          src={dollarImg}
          alt="shop"
          className="hover:scale-110 hover:-hue-rotate-60 transition -rotate-12"
          style={{
            width: '200px',
            position: 'absolute',
            top: '280px',
            left: '240px',
          }}
        />
      </Link>

      <div className="home-title hidden absolute top-[200px] left-[350px] h-[100px] w-[200px] flex items-center justify-center z-30">
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

      <Link href="tuto/" className="home-link">
        <Image
          src={scissorImg}
          alt="tuto"
          className="hover:scale-110 transition z-20"
          style={{
            width: '200px',
            position: 'absolute',
            top: '70px',
            left: '350px',
          }}
        />
      </Link>

      <div className="home-title hidden absolute top-[150px] left-[480px] h-[100px] w-[200px] flex items-center justify-center z-30">
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

      <Link href="photo-gallery/" className="home-link">
        <Image
          src={cameraImg}
          alt="photo-gallery"
          className="hover:scale-110 hover:-hue-rotate-60 transition -rotate-12 z-10"
          style={{
            width: '300px',
            position: 'absolute',
            top: '280px',
            left: '450px',
          }}
        />
      </Link>

      <div className="home-title hidden absolute top-[180px] left-[650px] h-[100px] w-[250px] flex items-center justify-center z-30">
        <Image
          src={bubbleImg}
          alt="photo-gallery-bubble"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <p className="absolute text-4xl font-tanker top-5">PHOTO GALLERY</p>
      </div>

      <Link href="contest/" className="home-link">
        <Image
          src={coupeImg}
          alt="contest"
          className="hover:scale-110 transition hover:-hue-rotate-60"
          style={{
            width: '350px',
            position: 'absolute',
            top: '50px',
            left: '650px',
          }}
        />
      </Link>

      <div className="home-title hidden absolute top-[150px] left-[900px] h-[100px] w-[200px] flex items-center justify-center z-30">
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
            top: '300px',
            left: '800px',
          }}
        />
      </Link>

      <div className="home-title hidden absolute top-[220px] left-[970px] h-[100px] w-[200px] flex items-center justify-center z-30">
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
            top: '300px',
            left: '950px',
          }}
        />
      </Link>

      <div className="home-title hidden absolute top-[250px] left-[1200px] h-[100px] w-[200px] flex items-center justify-center z-30">
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
      <p className="text-white font-tanker self-end text-center w-full text-6xl p-4">
        Rock the Mullet Fest: Unleash Your Inner Party in the Back !
      </p>
    </div>
  );
}
