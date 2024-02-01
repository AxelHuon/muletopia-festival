import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import backToHome from '../../../public/images/return-button-tuto.png';
import Link from 'next/link';

const ButtonTuto = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image
          src={backToHome}
          alt="Flèche retour"
          style={{
            position: 'absolute',
            top: '10px',
            left: '20px',
            width: '150px',
            height: '100px',
          }}
        />
      </Link>
    </div>
  );
};

export default ButtonTuto;
