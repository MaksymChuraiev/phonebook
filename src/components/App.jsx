import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

import { Loader } from './Loader/Loader';
import Layout from './Layout/Layout';
import { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const RegisterPage = lazy(() => import('../pages/RegisterPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                  path="register"
                  element={
                    <PublicRoute>
                      <RegisterPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="login"
                  element={
                    <PublicRoute>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute>
                      <ContactsPage />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
          <Toaster />
        </>
      )}
    </>
  );
};
