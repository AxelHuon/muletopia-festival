import React, { useEffect } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import Image from 'next/image';
import bubblePriceImg from '../../../public/images/home/bubble-home.png';

const ShopTeeshirt = (props) => {
  useEffect(() => {
    const teeshirtsImg = document.querySelectorAll('.teeshirt');

    gsap.registerPlugin(TextPlugin);

    const showTeeshirt = (teeshirt, index) => {
      gsap.to(teeshirt, {
        delay: index * 0.2,
        opacity: 1,
        duration: 1,
      });
    };
    teeshirtsImg.forEach((teeshirt, index) => {
      showTeeshirt(teeshirt, index);

      teeshirt.addEventListener('mouseover', function () {
        const price = teeshirt.querySelector('.text-text_price');
        gsap.to(price, {
          duration: 0.2,
          text: 'BUY',
        });
      });

      teeshirt.addEventListener('mouseout', function () {
        const price = teeshirt.querySelector('.text-text_price');
        gsap.to(price, {
          duration: 0.2,
          text: '29.99$',
        });
      });
    });
  }, []);

  return (
    <div className="teeshirt relative opacity-0 hover:scale-110 transition">
      <Image
        src={props.teeshirt}
        alt="tshirt"
        style={{
          minWidth: '250px',
          width: '250px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 m-auto h-[60px] w-[100px] flex items-center justify-center z-30 cursor-pointer hover:scale-110 transition">
        <Image
          src={bubblePriceImg}
          alt="bubble-price"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <p className="absolute top-2 text-2xl text-text_price font-tanker">
          29.99$
        </p>
      </div>
    </div>
  );
};

export default ShopTeeshirt;
