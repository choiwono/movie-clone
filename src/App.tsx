import React, { Fragment } from 'react';
import HeaderMobile from '../src/components/Layout/Header/HeaderMobile'
import { ToastContainer } from 'react-toastify';
//import GlobalStyle from '@/Shared/style/GlobalStyle';
import Router from './routes'

const App: React.FC = () => {
  return (
    <Fragment>
      {/*<GlobalStyle />*/}
      <Router />
      <ToastContainer />
      <HeaderMobile />
    </Fragment>
  );
}

export default App;
