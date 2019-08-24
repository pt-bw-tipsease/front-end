import React from 'react';

import StartingPage from './components/StartingPage';
import TabNav from './components/TabNav';
import './App.css';
import AppRouter from './components/AppRouter';


function App() {
  return (
    <>
    <TabNav/>
    <AppRouter/>
    </>
  );
}

export default App;
