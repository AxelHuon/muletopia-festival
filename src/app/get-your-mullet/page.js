'use client';
import Link from "next/link";
import styled from 'styled-components';
import { Colors } from '@/theme/Colors';
import Image from "next/image";
import {useEffect, useRef} from "react";
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

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
  height: calc(100% - 10rem);
`;
const HaircutImage = styled.img`
  width: 100%;
  height: auto;
  opacity: 1;
  filter: grayscale(100%);
  object-fit: none;
  
  object-position: 52% 35%;
`;

const HaircutSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;
`;

const PrevButton = styled(Button)`
  left: 1rem;
`;

const NextButton = styled(Button)`
  right: 1rem;
`;




export default function GetYourMullet() {
    const videoRef = useRef(null);
    const sliderRef = useRef(null);
    const haircuts = ['/images/mullet-2.png']; // Replace with your actual paths

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch(err => console.error(err));
        }


        if (sliderRef.current) {
            gsap.registerPlugin(Draggable);
            Draggable.create(sliderRef.current, {
                type: 'x',
                edgeResistance: 0.5,
                bounds: sliderRef.current.parentNode,
                throwProps: true
            });
        }
    }, []);
    const prevSlide = () => {
        gsap.to(sliderRef.current, {
            x: '+=100%',
            duration: 1,
            ease: 'power1.out'
        });
    };

    const nextSlide = () => {
        gsap.to(sliderRef.current, {
            x: '-=100%',
            duration: 1,
            ease: 'power1.out'
        });
    };

    return <main>
        <PageContent>
            <Video ref={videoRef} autoPlay />
            <HaircutSlider ref={sliderRef}>
                {haircuts.map((haircut, index) => (
                    <HaircutImage key={index} src={haircut} alt={`Haircut ${index + 1}`} />
                ))}
            </HaircutSlider>
            <PrevButton onClick={prevSlide}>Prev</PrevButton>
            <NextButton onClick={nextSlide}>Next</NextButton>
            <p>Get your own mullet !</p>
        </PageContent>
    </main>;
}
