import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import returnImg from '../../../public/images/return-arrow.png';

export default function Return(props) {
  useEffect(() => {
    const returnArrow = document.querySelector('.return img');
    document
      .querySelector('.return')
      .addEventListener('mouseover', function () {
        returnArrow.style.transition = 'opacity 0.3s, transform 0.3s';
        returnArrow.style.opacity = '1';
        returnArrow.style.transform = 'translate(0px, 0px)';
      });

    document.querySelector('.return').addEventListener('mouseout', function () {
      returnArrow.style.transition = 'opacity 0.3s, transform 0.3s';
      returnArrow.style.opacity = '0';
      returnArrow.style.transform = 'translate(32px, -32px)';
    });
  });

  return (
    <Link
      href="/"
      className="return absolute text-6xl text-white font-tanker top-10 left-10 hover:text-primary z-50"
    >
      <p>return</p>
      <Image
        src={returnImg}
        alt="return-arrow"
        className="opacity-0 transition translate-x-8 -translate-y-8"
        style={{
          minWidth: '150px',
          width: '150px',
        }}
      />
    </Link>
  );
}
