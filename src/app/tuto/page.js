'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import backgroundImg from '../../../public/images/background-tuto.png';
import swing from '../../../public/images/swing.png';
import line from '../../../public/images/line.png';
import line2 from '../../../public/images/line2.png';
import mouth from '../../../public/images/mouth.png';
import bulleTuto from '../../../public/images/bulle-tuto.png';

import star1 from '../../../public/images/star1.png';
import star2 from '../../../public/images/star2.png';
import star3 from '../../../public/images/star3.png';
import star4 from '../../../public/images/star4.png';

import Image from 'next/image';
import ButtonTuto from './buttonTuto';

export default function Tuto() {
  const tutorialVideos = [
    'Zyb8s1YM7d4',
    'QxcqUWwpkq8',
    'eeZc5L6nCmA',
    'mmFGc4QyMKo',
  ];

  const floatingAssetRef = useRef(null);
  const floatingAssetRef2 = useRef(null);
  const floatingAssetRef3 = useRef(null);
  const floatingAssetRef4 = useRef(null);

  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    justifyContent: 'center',
    backgroundColor: '#F4B64B',
    backgroundSize: 'cover',
    mixBlendMode: 'multiply',
  };

  const titleStyle = {
    fontSize: '32px',
    marginBottom: '50px',
    color: 'white',
  };

  const descriptionStyle = {
    fontSize: '20px',
    fontFamily: 'Tanker',
    marginTop: '10px',
    marginBottom: '100px',
    width: '50%',
    color: 'black',
  };

  const videosContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rowStyle = {
    display: 'flex',
    marginBottom: '50px',
  };

  const videoStyle = {
    width: '350px',
    height: '207px',
    margin: '0 25px',
  };

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    gsap.to(floatingAssetRef.current, {
      y: -5,
      x: 5,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to(floatingAssetRef2.current, {
      y: -12,
      x: 8,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to(floatingAssetRef3.current, {
      y: 7,
      x: 16,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to(floatingAssetRef4.current, {
      y: -3,
      x: 8,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <main>
      <div style={containerStyle}>
        <ButtonTuto
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '50px',
            height: '50px',
          }}
        />
        <Image
          src={backgroundImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: -1 }}
        />
        <div
          style={{
            position: 'absolute',
            top: '100px',
            left: '100px',
            zIndex: -1,
          }}
        >
          <Image
            ref={floatingAssetRef}
            alt="swing"
            src={swing}
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '400px',
            left: '200px',
            zIndex: -1,
          }}
        >
          <Image
            ref={floatingAssetRef2}
            alt="line"
            src={line}
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '600px',
            left: '1300px',
            zIndex: -1,
          }}
        >
          <Image
            ref={floatingAssetRef3}
            alt="line2"
            src={line2}
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '150px',
            left: '1000px',
            zIndex: -1,
          }}
        >
          <Image
            ref={floatingAssetRef4}
            alt="mouth"
            src={mouth}
            width={1000}
            height={400}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '370px',
            zIndex: -1,
          }}
        >
          <Image
            src={bulleTuto}
            alt="bulleTuto"
            width={800}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '460px',
            left: '710px',
            zIndex: 1,
          }}
        >
          <Image
            src={star1}
            alt="star1"
            width={50}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '720px',
            left: '710px',
            zIndex: 1,
          }}
        >
          <Image
            src={star2}
            alt="star2"
            width={50}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '460px',
            left: '1100px',
            zIndex: 1,
          }}
        >
          <Image
            src={star3}
            alt="star3"
            width={50}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '720px',
            left: '1100px',
            zIndex: 1,
          }}
        >
          <Image
            src={star4}
            alt="star4"
            width={50}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <h1 style={titleStyle}>Mullet Haircut Tutorials</h1>
        <p style={descriptionStyle}>
          Want to master the art of the mullet haircut? Explore practical
          tutorials filled with professional advice to achieve the perfect cut.
        </p>
        <div style={videosContainerStyle}>
          <div style={rowStyle}>
            {tutorialVideos.slice(0, 2).map((videoId, index) => (
              <div key={index} style={videoStyle}>
                <iframe
                  width="350"
                  height="207"
                  src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
          <div style={rowStyle}>
            {tutorialVideos.slice(2, 4).map((videoId, index) => (
              <div key={index} style={videoStyle}>
                <iframe
                  width="350"
                  height="207"
                  src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
