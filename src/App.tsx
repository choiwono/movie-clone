import React, { Fragment } from 'react';
import HeaderMobile from '../src/components/Layout/Header/HeaderMobile'
//import GlobalStyle from '@/Shared/style/GlobalStyle';
import Router from './routes'

const App: React.FC = () => {
  return (
    <Fragment>
      {/*<GlobalStyle />*/}
      <Router />
      <HeaderMobile />
    </Fragment>
  );
}

export default App;
