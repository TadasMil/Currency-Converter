import React from 'react';
import './App.css';
import {Layout} from './components/Layout/Layout'
import Converter from './containers/converter/Converter'

function App() {
  return (
    <>
      <Layout>
        <Converter />
      </Layout>
    </>
  );
}

export default App;
