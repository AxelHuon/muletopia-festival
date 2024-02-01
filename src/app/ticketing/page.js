'use client';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Colors } from '@/theme/Colors';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Return from '../components/return';

const BackgroundContainer = styled.div`
  background-image: url('/images/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-color: ${Colors.primaryColor};
  max-height: 100vh;
  overflow: hidden;
  position: relative;
`;

const FloatingDot = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 0;
  ${({ position }) => {
    switch (position) {
      case 'left':
        return css`
          top: 50%;
          left: 0;
          transform: translate(0, -50%);
        `;
      case 'center':
        return css`
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 2;
        `;
      case 'right':
        return css`
          top: 100%;
          right: 0;
          transform: translate(0, -100%);
          z-index: 2;
        `;
    }
  }}
`;

const OverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
`;

const TicketShowcase = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  width: calc(100% - 160px);
  height: calc(100% - 100px);
  margin: 50px 80px;
`;

const ticketCommonStyles = css`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30%;
  height: 100%;
  z-index: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.1s;
`;

const Ticket = styled.div`
  ${ticketCommonStyles}
  background-image: ${({ bgImage }) => `url('${bgImage}')`};
`;

const TextSection = styled.p`
  font-family: 'Tanker';
  font-style: normal;
  font-weight: 400;
  color: ${Colors.black};
  text-align: center;
  margin-top: 20px;
  ${({ size }) =>
    size === 'large'
      ? 'font-size: 70px;'
      : 'font-size: 20px; font-weight: bold;'}
`;

const Price = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${() => Math.floor(Math.random() * 41) - 20}deg);
  position: relative;
  img {
    position: absolute;
  }
  p {
    font-family: 'Tanker';
    font-size: 50px;
    font-weight: bold;
    color: ${Colors.gray300};
    text-align: center;
    z-index: 3;
  }
`;

const RotatingShape = styled.img`
  position: absolute;
  ${({ top, left, transform }) => css`
    top: ${top};
    left: ${left};
    transform: ${transform};
  `}
`;

const NavigationLink = styled(Link)`
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

export default function TicketingPage() {
  const refs = {
    leftDot: useRef(null),
    centerDot: useRef(null),
    rightDot: useRef(null),
    ticket1: useRef(null),
    ticket2: useRef(null),
    ticket3: useRef(null),
    shape1: useRef(null),
    shape2: useRef(null),
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(e.currentTarget, {
      x: (x - rect.width / 2) / 20,
      y: (y - rect.height / 2) / 20,
      scale: 1.01,
      duration: 0,
      ease: 'power4.inOut',
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0,
      ease: 'power1.in',
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      refs.leftDot.current,
      { scale: 6, x: -2000 },
      { scale: 1, x: 0, duration: 1, ease: 'power4.out' }
    )
      .fromTo(
        refs.ticket1.current,
        { y: '150%' },
        { y: '0%', duration: 1, ease: 'power1.inOut' },
        '-=0.8'
      )
      .fromTo(
        refs.centerDot.current,
        { scale: 6, y: -1000 },
        { scale: 1, y: 0, duration: 1, ease: 'power4.out' },
        '-=0.4'
      )
      .fromTo(
        refs.ticket2.current,
        { y: '150%' },
        { y: '0%', duration: 1, ease: 'power1.inOut' },
        '-=0.6'
      )
      .fromTo(
        refs.rightDot.current,
        { scale: 6, y: 1000 },
        { scale: 1, y: '-100%', duration: 1, ease: 'power4.out' },
        '-=0.4'
      )
      .fromTo(
        refs.shape2.current,
        { opacity: 0, rotation: 0 },
        { opacity: 1, rotation: 360, duration: 1, ease: 'power1.inOut' },
        '-=0.6'
      )
      .fromTo(
        refs.shape1.current,
        { opacity: 0, rotation: 0 },
        { opacity: 1, rotation: 360, duration: 1, ease: 'power1.inOut' },
        '-=1'
      );
  });

  return (
    <BackgroundContainer>
      <Return />
      <OverlayContainer>
        <FloatingDot ref={refs.leftDot} position="left">
          <Image
            src="/images/eye-dot.png"
            alt="eye-dot"
            width={350}
            height={250}
          />
        </FloatingDot>
        <FloatingDot ref={refs.centerDot} position="center">
          <Image
            src="/images/face-dot.png"
            alt="face-dot"
            width={350}
            height={250}
          />
        </FloatingDot>
        <FloatingDot ref={refs.rightDot} position="right">
          <Image
            src="/images/ear-dot.png"
            alt="ear-dot"
            width={250}
            height={250}
          />
        </FloatingDot>
      </OverlayContainer>

      <TicketShowcase>
        <Ticket
          ref={refs.ticket1}
          bgImage="/images/ticket-1.svg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <TextSection size="large">1 day</TextSection>
          <TextSection size="small">Friday, Saturday, or Sunday</TextSection>
          <Price>
            <Image
              src="/images/ticket-price.svg"
              alt="ticket-price"
              width={250}
              height={250}
            />
            <p>35$</p>
          </Price>
          <RotatingShape
            ref={refs.shape1}
            src="/images/spin-1.svg"
            alt="spin"
            width={120}
            height={120}
            top="100%"
            left="0"
            transform="translate(-50%, -100%)"
          />
        </Ticket>

        <Ticket
          ref={refs.ticket2}
          bgImage="/images/ticket-2.svg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <TextSection size="large">2 days</TextSection>
          <TextSection size="small">
            Friday and Saturday or Saturday and Sunday
          </TextSection>
          <Price>
            <Image
              src="/images/ticket-price.svg"
              alt="ticket-price"
              width={250}
              height={250}
            />
            <p>50$</p>
          </Price>
        </Ticket>

        <Ticket
          ref={refs.ticket3}
          bgImage="/images/ticket-3.svg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <TextSection size="large">All days</TextSection>
          <TextSection size="small">All days for you, man!</TextSection>
          <Price>
            <Image
              src="/images/ticket-price.svg"
              alt="ticket-price"
              width={250}
              height={250}
            />
            <p>75$</p>
          </Price>
          <RotatingShape
            ref={refs.shape2}
            src="/images/star-1.svg"
            alt="spin"
            width={100}
            height={100}
            top="0"
            left="100%"
            transform="translate(-75%, -40%)"
          />
        </Ticket>
      </TicketShowcase>
    </BackgroundContainer>
  );
}
