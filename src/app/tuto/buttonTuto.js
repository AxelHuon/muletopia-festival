import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import backToHome from '../../../public/images/return-button-tuto.png';

const ButtonTuto = () => {
  return (
    <div>
      <div style={{ cursor: 'pointer' }}>
        <Link href="/">
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
    </div>
  );
};

export default ButtonTuto;
