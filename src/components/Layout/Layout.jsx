import { PhonebookAppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <PhonebookAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
