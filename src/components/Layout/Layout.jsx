import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { BackGroundColor, ColorElement } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <BackGroundColor>
        <ColorElement />
        <ColorElement />
        <ColorElement />
      </BackGroundColor>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
