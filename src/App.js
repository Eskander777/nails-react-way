import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Aux from './hoc/auxilliary/Auxilliary';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Footer from './components/Navigation/Footer/Footer'
import MainPage from './components/mainPage/Main';
import ExamplesPage from './components/examplesPage/ExamplesPage';
import OrderPage from './components/orderPage/OrderPage';
import Sidedrawer from './components/Navigation/Sidedrawer/Sidedrawer';
import Backdrop from './components/UI/Backdrop/Backdrop';

const App = () => {
  const [sideDrawerState, setSideDrawerState] = React.useState({
    showSideDrawer: false,
  });

  const showSideDrawerHandler = () => {
    setSideDrawerState({ showSideDrawer: true });
  };

  const closeBackdropAndSidedrawer = () => {
    setSideDrawerState({ showSideDrawer: false });
  };

  let sidedrawer = sideDrawerState.showSideDrawer ? (
    <Sidedrawer close={closeBackdropAndSidedrawer} />
  ) : null;

  let backdrop = sideDrawerState.showSideDrawer ? (
    <Backdrop setBackdropState={closeBackdropAndSidedrawer} />
  ) : null;

  return (
    <Aux>
      <Toolbar showSideDrawerHandler={showSideDrawerHandler} />
      {sidedrawer}
      {backdrop}
      <main>
        <Route path="/exapmles" component={ExamplesPage} />
        <Route path="/order_page" component={OrderPage} />
        <Route path="/" exact component={MainPage} />
      </main>
      <Footer/>
    </Aux>
  );
};

export default App;
