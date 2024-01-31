'use client';
import React, { Fragment } from 'react';
import { Transition } from 'react-transition-group';
import { usePathname } from 'next/navigation';

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <Fragment>
      <Transition location={pathname}>
        <div className="min-h-screen">{children}</div>
      </Transition>
    </Fragment>
  );
};
// React.memo may not be important
export default React.memo(MainLayout);
