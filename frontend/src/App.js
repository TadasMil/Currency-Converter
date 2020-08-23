import React, {Component} from 'react';
import './App.css';
import {Layout} from './components/Layout/Layout'
import Converter from './containers/converter/Converter'
import axios from 'axios'

class App extends Component {
  componentDidMount(){
    axios.get('http://localhost:5000/')
  }
  render(){
    return (
      <>
        <Layout>
          <Converter />
        </Layout>
      </>
    );
  }
}

export default App;
