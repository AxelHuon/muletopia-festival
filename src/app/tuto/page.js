'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Return from '@/app/components/return';
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
import styled from 'styled-components';
import { Colors } from '@/theme/Colors';

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  background-color: #f4b64b;
  background-size: cover;
  mix-blend-mode: multiply;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-family: 'Tanker';
`;

const Description = styled.p`
  font-family: 'Tanker';
  color: black;
`;

const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Video = styled.div`
  width: 350px;
  height: 207px;
  margin: 0 25px;
`;

const FloatingImage = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: -1;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
  height: 100px;
`;

const ContainerImageText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    position: absolute;
  }
`;

const Tuto = () => {
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
      <Container className='bg-home_2'>
        <Return/>
        <FloatingImage top={200} left={100}>
          <Image
            ref={floatingAssetRef}
            alt="swing"
            src={swing}
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </FloatingImage>
        <FloatingImage top={500} left={200}>
          <Image
            ref={floatingAssetRef2}
            alt="line"
            src={line}
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </FloatingImage>
        <FloatingImage top={600} left={1300}>
          <Image
            ref={floatingAssetRef3}
            alt="line2"
            src={line2}
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </FloatingImage>
        <FloatingImage top={250} left={1000}>
          <Image
            ref={floatingAssetRef4}
            alt="mouth"
            src={mouth}
            width={1000}
            height={400}
            layout="fixed"
            objectFit="cover"
          />
        </FloatingImage>
          <Title className='text-6xl text-white mt-10'>Mullet Haircut Tutorials</Title>
        <FloatingImage top={460} left={710}>
          <Image
            src={star1}
            alt="star1"
            width={50}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </FloatingImage>
        <FloatingImage top={720} left={710}>
          <Image
            src={star2}
            alt="star2"
            width={50}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </FloatingImage>
        <FloatingImage top={460} left={1100}>
          <Image
            src={star3}
            alt="star3"
            width={50}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </FloatingImage>
        <FloatingImage top={720} left={1100}>
          <Image
            src={star4}
            alt="star4"
            width={50}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        </FloatingImage>
          <ContainerImageText className='relative'>
          <Image
            src={bulleTuto}
            alt="bulleTuto"
            width={800}
            height={100}
            layout="fixed"
            objectFit="cover"
          />
        <Description className='absolute text-2xl w-[700px] top-14'>
          Want to master the art of the mullet haircut? Explore practical
          tutorials filled with professional advice to achieve the perfect cut.
        </Description>
        </ContainerImageText>
        <VideosContainer>
          <Row>
            {tutorialVideos.slice(0, 2).map((videoId, index) => (
              <Video key={index}>
                <iframe
                  width="350"
                  height="207"
                  src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Video>
            ))}
          </Row>
          <Row>
            {tutorialVideos.slice(2, 4).map((videoId, index) => (
              <Video key={index}>
                <iframe
                  width="350"
                  height="207"
                  src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Video>
            ))}
          </Row>
        </VideosContainer>
      </Container>
    </main>
  );
};

export default Tuto;
