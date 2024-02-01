'use client';
import Image from 'next/image';

import shopTeeshirt from '../components/shop-teeshirt';
import Return from '../components/return';
import ShopTeeshirt from '../components/shop-teeshirt';
import teeshirt1Img from '../../../public/images/home/tee-shirt-1.png';
import teeshirt2Img from '../../../public/images/home/tee-shirt-2.png';
import teeshirt3Img from '../../../public/images/home/tee-shirt-3.png';

export default function Shop() {
  return (
    <div className="flex min-h-[100vh] w-full bg-home_2 bg-repeat bg-cover items-center flex-col p-16">
      <Return />
      <p className="text-6xl text-white font-tanker mb-12">SHOP</p>
      <div className="flex flex-wrap gap-10 justify-center">
        <ShopTeeshirt teeshirt={teeshirt1Img} />
        <ShopTeeshirt teeshirt={teeshirt2Img} />
        <ShopTeeshirt teeshirt={teeshirt3Img} />
        <ShopTeeshirt teeshirt={teeshirt1Img} />
        <ShopTeeshirt teeshirt={teeshirt2Img} />
        <ShopTeeshirt teeshirt={teeshirt3Img} />{' '}
        <ShopTeeshirt teeshirt={teeshirt1Img} />
        <ShopTeeshirt teeshirt={teeshirt2Img} />
        <ShopTeeshirt teeshirt={teeshirt3Img} />{' '}
        <ShopTeeshirt teeshirt={teeshirt1Img} />
        <ShopTeeshirt teeshirt={teeshirt2Img} />
        <ShopTeeshirt teeshirt={teeshirt3Img} />{' '}
        <ShopTeeshirt teeshirt={teeshirt1Img} />
        <ShopTeeshirt teeshirt={teeshirt2Img} />
        <ShopTeeshirt teeshirt={teeshirt3Img} />
      </div>
    </div>
  );
}
