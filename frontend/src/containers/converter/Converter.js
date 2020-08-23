import React, { Component } from 'react'
import ConverterModule from '../../components/Converter/ConverterModule'
import axios from 'axios'

export default class Converter extends Component {
    state = {
        amount: '',
        result: '',
        currencyData: [],
        boxSelected: 0,
        selectedCurrency: [],
        selectBoxUsed: 0
    }

    handleAmountChange = (e) => {
      this.setState({
          amount: e.target.value
      })
    }

    handleSelectChange = (selectedBox, e) => {
        var selection = e.target.value;
        
        const newSelected = [...this.state.selectedCurrency]
        
        newSelected[selectedBox] = selection;

        this.setState({
            selectedCurrency: newSelected
        })
    }

    componentDidMount(){
        axios.get('http://localhost:5000/currency')
            .then(response => {
                var currency = response.data;
             this.setState({
                 currencyData: currency
             })
            }).catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <>
                <ConverterModule
                    amount={this.state.amount}
                    handleAmountChange={this.handleAmountChange}
                    currencyRates={this.state.currencyData}
                    handleSelectChange={this.handleSelectChange}
                    selectBoxUsed={this.state.selectBoxUsed}>
                </ConverterModule>
            </>
        )
    }
}
