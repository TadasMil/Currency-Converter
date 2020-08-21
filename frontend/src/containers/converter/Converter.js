import React, { Component } from 'react'
import ConverterModule from '../../components/Converter/ConverterModule'

export default class Converter extends Component {
    state = {
        amount: '',
        result: ''
    }
    handleAmountChange = (e) => {
      this.setState({
          amount: e.target.value
      })
    }
    render() {
        return (
            <>
               <ConverterModule handleAmountChange={this.handleAmountChange}></ConverterModule>
            </>
        )
    }
}
