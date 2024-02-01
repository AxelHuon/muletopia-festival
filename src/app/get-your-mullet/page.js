'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '@/theme/Colors';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import html2canvas from 'html2canvas';

const PageContent = styled.div`
  background-image: url('/images/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-color: ${Colors.primaryColor};
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${Colors.white};
    font-size: 6rem;
    text-align: center;
    font-family: 'Tanker';
    margin-bottom: 20px;
    z-index: 10;
    pointer-events: none;
  }

  button {
    background-color: ${Colors.white};
    color: ${Colors.primaryColor};
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 2rem;
    font-family: 'Tanker';
    cursor: pointer;
    z-index: 10;
    pointer-events: all;
  }
`;

const Video = styled.video`
  mask-image: url('/images/camera-mask.svg');
  mask-repeat: no-repeat;
  mask-size: 40%;
  stroke: ${Colors.white};
  mask-position: center 100%;
  filter: grayscale(100%);
  filter: grayscale(100%);
  transform: scaleX(-1);
  width: 75%;
  height: calc(100% - 12rem);
`;

const HaircutImage = styled.img`
  position: absolute;
  width: 200px; // Vous pouvez ajuster la taille selon vos besoins
  height: auto;
  top: -50vh;
  cursor: grab;
  transition: width 0.5s ease-in-out;
  z-index: 10;
`;

const ReturnLink = styled.a`
  position: absolute;
  top: 20px;
  left: 40px;
  font-family: 'Tanker';
  font-size: 50px;
  color: ${Colors.white};
  text-align: center;
  z-index: 3;
  cursor: pointer;
`;

gsap.registerPlugin(Draggable);
export default function GetYourMullet() {
  const videoRef = useRef(null);
  const hairCutRef = useRef(null);
  const animationRef = useRef(null);
  const canvasRef = useRef(null);
  const haircuts = ['/images/mullet-2.png', '/images/mullet-3.png'];

  const takePhoto = () => {
    if (document) {
      html2canvas(document.body).then((canvas) => {
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'screenshot.png';
        link.click();
      });
    }
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error(err));
    }

    haircuts.forEach((haircut, index) => {
      const randomX = Math.random() * 70 - 35;
      gsap.fromTo(
        `.haircut-${index}`,
        {
          x: `${randomX}vw`,
        },
        { y: '125vh', ease: 'power1.inOut', duration: 2 }
      );
    });

    // Add drag and drop functionality
    const haircutsElements = document.querySelectorAll('.haircut');
    haircutsElements.forEach((haircut) => {
      haircut.draggable = true;
      gsap.registerPlugin(Draggable);
      Draggable.create(haircut, {
        type: 'x,y',
        bounds: window, // Change bounds to window
        onDrag: function () {
          gsap.to(this.target, { rotation: this.x / 10, duration: 0.5 });
          gsap.to(animationRef.current, {
            x: this.x,
            y: this.y,
            duration: 0.5,
          });
        },
        onDragEnd: function () {
          gsap.to(this.target, { rotation: 0, duration: 0.5 });
          const haircutRect = haircut.getBoundingClientRect();
          const lottieAnim = document.querySelector('.lottie-player');
          lottieAnim.style.left = `${haircutRect.left - haircutRect.width / 2}px`;
          lottieAnim.style.top = `${haircutRect.top - haircutRect.height / 2}px`;

          animationRef.current.play(); // Play the Lottie animation
        },
      });

      // Add right click event listener to increase width
      haircut.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const currentWidth = parseFloat(getComputedStyle(haircut).width);
        haircut.style.width = `${currentWidth * 1.1}px`; // Increase width by 10%
      });

      haircut.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rotation = gsap.getProperty(haircut, 'rotation');
        gsap.to(haircut, { rotation: rotation + e.deltaY / 10, duration: 0.1 });
      });
    });
  }, []);

  return (
    <main>
      <PageContent>
        <ReturnLink href="/">Return</ReturnLink>
        <Video ref={videoRef} autoPlay />
        {haircuts.map((haircut, index) => (
          <HaircutImage
            key={index}
            ref={hairCutRef}
            className={`haircut haircut-${index}`}
            src={haircut}
            alt={`Haircut ${index + 1}`}
          />
        ))}
        <Player
          ref={animationRef}
          autoplay={false}
          loop={false}
          className={'lottie-player'}
          src="/animations/stick-animation.json"
          style={{
            height: '350px',
            width: '350px',
            position: 'absolute',
            zIndex: 0,
          }}
        />
        <button onClick={takePhoto}>Take Photo</button>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        <p>Get your own mullet !</p>
      </PageContent>
    </main>
  );
}
