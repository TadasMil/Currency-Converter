import React, { Component } from 'react'
import ConverterModule from '../../components/Converter/ConverterModule'
import axios from 'axios'

export default class Converter extends Component {
    state = {
        amount: '',
        displayResult: "",
        result: '',
        currencyData: [],
        selectedCurrency: [],
        selectBoxUsed: 0
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

    handleAmountChange = (e) => {
      this.setState({
          amount: e.target.value
      }, () => {
        this.GetTheSelectedAmount();
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

    GetTheSelectedAmount = () => {
        const maxCurrencies = 2;
        if(this.state.selectedCurrency.length === maxCurrencies && this.state.selectedCurrency[0] != null) {
            const num1 = this.state.selectedCurrency[0].slice(4);
            const num2 = this.state.selectedCurrency[1].slice(4);

            this.CalculateTheSum(num1, num2);
        }
    }

    CalculateTheSum = (amt1, amt2) => {
        const result = ((this.state.amount / amt1) * amt2).toFixed(2);
        this.setState({
            result: result
        }, () => {
            this.handleShowResult();
        })
    }

    handleShowResult = () => {
        this.setState({
            displayResult: this.state.result
        }, () => {
           let [convertedFrom, convertedTo] = this.state.selectedCurrency;
            
           const userActivity = {
                convertedFrom: convertedFrom,
                convertedTo: convertedTo,
                amount: this.state.amount
            }
            axios.post("http://localhost:5000/users-activity", userActivity)
                .catch(error => {
                    console.log(error);
                })
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
                    displayResult={this.state.displayResult}
                    selectedCurr={this.state.selectedCurrency}>
                </ConverterModule>
            </>
        )
    }
}
