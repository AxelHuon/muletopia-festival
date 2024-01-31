'use client';
import React, { useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Colors } from '@/theme/Colors';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styled from 'styled-components';
import LoaderLayout from '../../layout/LoaderLayout/LoaderLayout';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Template = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const sweepAnimation = {
    initial: {
      x: '-100%',
      transition: {
        duration: 2,
        ease: [0.85, 0, 0.2, 1],
      },
    },
    animate: {
      x: '100%',
      transition: {
        duration: 2,
        ease: [0.85, 0, 0.2, 1],
      },
    },
    exit: {
      x: '100%',
      transition: {
        duration: 2,
        ease: [0.85, 0, 0.2, 1],
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: ['-100%', '0%', '0%', '100%'],
      transition: {
        duration: 3,
        times: [0, 0.25, 0.5, 1],
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <AnimatePresence mode={'wait'}>
        {!isHome && (
          <motion.div
            key="sweep"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: Colors.primaryColor,
              zIndex: 2,
            }}
            variants={sweepAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Container>
              <Image
                src={'/images/mulet-loader.png'}
                alt={'mulet loader'}
                width={519}
                height={456}
              />
            </Container>
          </motion.div>
        )}
        {isHome && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={controls}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100vw',
              height: '100vh',
            }}
          >
            <LoaderLayout />
          </motion.div>
        )}
        {children}
      </AnimatePresence>
    </div>
  );
};

export default Template;
