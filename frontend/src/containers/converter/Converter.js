import React, { Component } from 'react'
import ConverterModule from '../../components/Converter/ConverterModule'
import axios from 'axios'

export default class Converter extends Component {
    state = {
        amount: '',
        result: '',
        currencyData: []

    }
    handleAmountChange = (e) => {
      this.setState({
          amount: e.target.value
      })
    }
    componentDidMount(){
        axios.get('http://localhost:5000/currency')
            .then(response => {
                var currency = response.data;
             this.setState({
                 currencyData: currency
             })
            })
    }
    render() {
        return (
            <>
               <ConverterModule handleAmountChange={this.handleAmountChange} currencyRates={this.state.currencyData}></ConverterModule>
               {console.log(this.state.currencyData)}
            </>
        )
    }
}
