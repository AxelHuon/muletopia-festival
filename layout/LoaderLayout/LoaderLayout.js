'use client';
import React, { useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SlowMo } from 'gsap/dist/EasePack';
import { Colors } from '@/theme/Colors';
import Image from 'next/image';
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(useGSAP, SlowMo);
gsap.registerPlugin(CustomEase);

const BoxAnimation = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ContainerYellow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 9999;
  background: ${Colors.primaryColor};
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 50%;
  padding: 50px;
`;
const ContainerMullet = styled.div`
  width: 171px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ContainerCamera = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20%;
  top: -20%;
  transform: translate(-50%, -50%);
`;
const ContainerBook = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10%;
  top: -20%;
  transform: translate(-50%, -50%);
`;
const ContainerCoupe = styled.div`
  position: absolute;
  left: 50%;
  top: -50%;
  transform: translate(-50%, -50%);
`;
const ContainerTickets = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 40%;
  top: -60%;
  transform: translate(-50%, -50%);
`;

const ContainerCiseaux = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 75%;
  top: -60%;
  transform: translate(-50%, -50%);
`;

const ContainerDollars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 75%;
  top: -60%;
  transform: translate(-50%, -50%);
`;
const ContianerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 501px;
  > div {
    height: 100px;
    overflow: hidden;
    position: relative;
    &:first-child {
      > h2 {
        position: absolute;
        bottom: -100%;
        font-size: 100px;
        font-family: 'Tanker';
        color: ${Colors.white};
        line-height: 90px;
      }
    }
    &:last-child {
      > h2:last-child {
        position: absolute;
        bottom: -100%;
        font-size: 100px;
        font-family: 'Tanker';
        color: ${Colors.black};
        line-height: 90px;
      }
    }
  }
`;
const LoaderLayout = () => {
  CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');
  const refs = {
    boxAnimation: useRef(),
    yellowContainerRef: useRef(),
    cameraRef: useRef(),
    bookRef: useRef(),
    coupeRef: useRef(),
    ciseauxRef: useRef(),
    dollarsRef: useRef(),
    ticketsRef: useRef(),
    firstTitleLogoRef: useRef(),
    secondTitleLogoRef: useRef(),
  };

  useGSAP(
    (context, contextSafe) => {
      gsap.to(refs.yellowContainerRef.current, {
        top: '0%',
        duration: 1.5,
        ease: 'custom',
      });
      gsap.to(refs.cameraRef.current, {
        top: '90%',
        duration: 1.5,
        ease: 'bounce.out',
        delay: 1,
      });
      gsap.to(refs.bookRef.current, {
        top: '90%',
        duration: 1.5,
        ease: 'bounce.out',
        delay: 1.2,
      });
      gsap.to(refs.ticketsRef.current, {
        top: '90%',
        duration: 1.5,
        ease: 'bounce.out',
        delay: 1.2,
      });
      gsap.to(refs.coupeRef.current, {
        top: '90%',
        duration: 1.5,
        ease: 'bounce.out',
        delay: 0.8,
      });
      gsap.to(refs.ciseauxRef.current, {
        top: '90%',
        duration: 1.5,
        ease: 'expo.inOut',
        delay: 0.6,
      });
      gsap.to(refs.dollarsRef.current, {
        top: '90%',
        duration: 1.5,
        ease: 'bounce.out',
        delay: 0.6,
      });
      gsap.to(refs.firstTitleLogoRef.current, {
        bottom: '0',
        duration: 1.5,
        ease: 'expo.inOut',
        delay: 0.4,
      });
      gsap.to(refs.secondTitleLogoRef.current, {
        bottom: '0',
        duration: 1.5,
        ease: 'expo.inOut',
        delay: 0.6,
      });
      gsap.to(refs.boxAnimation.current, {
        top: '-130%',
        duration: 1.5,
        ease: 'expo.inOut',
        delay: 2.3,
      });
    },
    { scope: refs.yellowContainerRef }
  );

  return (
    <BoxAnimation ref={refs.boxAnimation}>
      <ContainerYellow ref={refs.yellowContainerRef}>
        <ContainerLogo>
          <ContainerMullet>
            <Image
              src={'/logos/mullet-black.svg'}
              width={577}
              height={200}
              alt={'logo'}
            />
          </ContainerMullet>
          <ContianerTitle>
            <div>
              <h2 ref={refs.firstTitleLogoRef}>Muletopia</h2>
            </div>
            <div>
              <h2 ref={refs.secondTitleLogoRef}>Festival</h2>
            </div>
          </ContianerTitle>
        </ContainerLogo>
        <ContainerTickets ref={refs.ticketsRef}>
          <Image
            src={'/images/tickets.png'}
            width={469}
            height={375}
            alt={'tickets'}
          />
        </ContainerTickets>
        <ContainerCamera ref={refs.cameraRef}>
          <Image
            src={'/images/appareil-photo.png'}
            width={556}
            height={518}
            alt={'logo'}
          />
        </ContainerCamera>
        <ContainerBook ref={refs.bookRef}>
          <Image
            src={'/images/book.png'}
            width={468}
            height={375}
            alt={'logo'}
          />
        </ContainerBook>
        <ContainerCoupe ref={refs.coupeRef}>
          <Image
            src={'/images/coupe.png'}
            width={557}
            height={711}
            alt={'logo'}
          />
        </ContainerCoupe>
        <ContainerCiseaux ref={refs.ciseauxRef}>
          <Image
            src={'/images/ciseaux.png'}
            width={549}
            height={617}
            alt={'logo'}
          />
        </ContainerCiseaux>
        <ContainerDollars ref={refs.dollarsRef}>
          <Image
            src={'/images/dollars.png'}
            width={549}
            height={617}
            alt={'logo'}
          />
        </ContainerDollars>
      </ContainerYellow>
    </BoxAnimation>
  );
};

export default LoaderLayout;
