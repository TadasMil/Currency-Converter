import React, {Component} from 'react';
import './App.css';
import {Layout} from './components/Layout/Layout'
import Converter from './containers/converter/Converter'
import axios from 'axios'

class App extends Component {
  componentDidMount(){
    axios.get(process.env.REACT_APP_BACKEND_URL)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
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
