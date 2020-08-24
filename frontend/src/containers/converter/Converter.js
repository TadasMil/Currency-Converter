import React, { Component } from 'react'
import ConverterModule from '../../components/Converter/ConverterModule'
import axios from 'axios'

export default class Converter extends Component {
    state = {
        amount: '',
        resultInput: '',
        result: '',
        currencyData: [],
        selectedCurrency: [],
        selectBoxUsed: 0
    }

    handleAmountChange = (e) => {
      this.setState({
          amount: e.target.value
      })
    }

    GetTheSelectedAmount = () => {
        if(this.state.selectedCurrency.length === 2) {
            let [num1, num2] = this.state.selectedCurrency;
            this.CalculateTheSum(num1, num2);
        }
    }

    handleShowResult = () => {
        this.setState({
            resultInput: this.state.result
        })
    }

    CalculateTheSum = (amt1, amt2) => {
        const result = ((this.state.amount / amt1) * amt2).toFixed(2);
        this.setState({
            result: result
        }, () => {
            this.handleShowResult();
        })
    }

    handleSelectChange = (selectedBox, e) => {
        var selection = e.target.value;

        const newSelected = [...this.state.selectedCurrency]
        
        newSelected[selectedBox] = selection;

        this.setState({
            selectedCurrency: newSelected
        }, () => {
            this.GetTheSelectedAmount();
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
                    selectBoxUsed={this.state.selectBoxUsed}
                    handleShowResult={this.handleShowResult}
                    resultInput={this.state.resultInput}>
                </ConverterModule>
            </>
        )
    }
}
