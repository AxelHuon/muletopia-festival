'use client';
import Link from "next/link";
import styled from 'styled-components';
import { Colors } from '@/theme/Colors';
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from "react";

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
`;

const EyeDot = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  pointer-events: none;
  z-index: 0;
`;

const FaceDot = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    pointer-events: none;
    z-index: 2;

`;

const EarDot = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    transform: translate(0, -100%);
    pointer-events: none;
    z-index: 2;
`;

const SvgContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
`;

const TicketContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  width: calc(100% - 160px);
  height: calc(100% - 100px);
  margin: 50px 80px 0 80px;
  
`;

const Ticket = styled.div`
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

const Ticket1 = styled(Ticket)`
  background-image: url('/images/ticket-1.svg');
  ${Ticket}
  
`;

const Ticket2 = styled(Ticket)`
  background-image: url('/images/ticket-2.svg');
  ${Ticket}
`;

const Ticket3 = styled(Ticket)`
  background-image: url('/images/ticket-3.svg');
  ${Ticket}
`;

const Title = styled.p`
    font-family: 'Tanker';
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.black};
    text-align: center;
    margin-top: 20px;
`;

const Date = styled.p`
    font-family: 'Tanker';
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.black};
    text-align: center;
`;

const Price = styled.div`
  margin-top: 50px;
  display: flex;
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

const Shape1 = styled.img`
    position: absolute;
    top: 100%;
    left: 0;
    transform: translate(-50%,-100%);
`;

const Shape2 = styled.img`
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-75%,-40%);
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




export default function Ticketing() {
  const refs = {
    eyeDotRef: useRef(),
    faceDot: useRef(),
    earDot: useRef(),
    ticket1: useRef(),
    ticket2: useRef(),
    ticket3: useRef(),
    shape1: useRef(),
    shape2: useRef(),
  };
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top;  //y position within the element.

    gsap.to(e.currentTarget, {
      x: (x - rect.width / 2) / 20, // Divide by a larger number for a smaller parallax effect
      y: (y - rect.height / 2) / 20, // Divide by a larger number for a smaller parallax effect
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

  useGSAP((context, contextSafe) => {
        const tl = gsap.timeline();

        tl.fromTo(refs.eyeDotRef.current, { scale: 6, x: -2000 }, { scale: 1, x: 0, duration: 1, ease: "power4.out" })
            .fromTo(refs.ticket1.current, { y: '150%' }, { y: '0%', duration: 1, ease: "power1.inOut" }, '-=0.8')
            .fromTo(refs.ticket2.current, { y: '150%' }, { y: '0%', duration: 1, ease: "power1.inOut" }, '-=0.6')
            .fromTo(refs.faceDot.current, { scale: 6, y: -1000}, { scale: 1, y:0,duration: 1, ease: "power4.out" }, '-=0.4')
            .fromTo(refs.ticket3.current, { y: '150%' }, { y: '0%', duration: 1, ease: "power1.inOut" }, '-=0.8')
            .fromTo(refs.earDot.current, { scale: 6, y: +1000 }, { scale: 1, y:'-100%', duration: 1, ease: "power4.out" }, '-=0.4')
            .fromTo(refs.shape2.current, { opacity: 0, rotation: 0 }, { opacity: 1, rotation: 360, duration: 1, ease: "power1.inOut" }, "-=0.6")
            .fromTo(refs.shape1.current, { opacity: 0, rotation: 0 }, { opacity: 1, rotation: 360, duration: 1, ease: "power1.inOut" }, "-=1");

      }
    );
  return <main>
    <PageContent>
      <ReturnLink href="/">Return</ReturnLink>

      <SvgContainer>
        <EyeDot ref={refs.eyeDotRef}>
            <Image src='/images/eye-dot.png' alt='eye-dot' width={350} height={250}/>
        </EyeDot>
        <FaceDot ref={refs.faceDot}>
            <Image src='/images/face-dot.png' alt='face-dot' width={350} height={250}/>
        </FaceDot>
        <EarDot ref={refs.earDot}>
            <Image src='/images/ear-dot.png' alt='ear-dot' width={250} height={250}/>
        </EarDot>
      </SvgContainer>

      <TicketContainer>
        <Ticket1 ref={refs.ticket1} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <Title>1 day
          </Title>
          <Date>
            Friday, saturday or sunday
          </Date>
          <Price>
            <Image src='/images/ticket-price.svg' alt='ear-dot' width={250} height={250}/>
            <p>35$</p>
          </Price>
          <Shape1 ref={refs.shape1} src='/images/spin-1.svg' alt='spin' width={120} height={120}/>
        </Ticket1>

        <Ticket2 ref={refs.ticket2} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <Title>2 days
          </Title>
          <Date>
            Friday and saturday or saturday and sunday
          </Date>
          <Price>
            <Image src='/images/ticket-price.svg' alt='ear-dot' width={250} height={250}/>
            <p>50$</p>
          </Price>
        </Ticket2>
        <Ticket3 ref={refs.ticket3} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <Title> All days
          </Title>
          <Date>
            All days for you, man !
          </Date>
          <Price>
            <Image src='/images/ticket-price.svg' alt='ear-dot' width={250} height={250}/>
            <p>75$</p>
          </Price>
          <Shape2 ref={refs.shape2} src='/images/star-1.svg' alt='spin' width={100} height={100}/>
        </Ticket3>
      </TicketContainer>
    </PageContent>
  </main>;
}
