import axios from 'axios'
import React, { Component } from 'react'
import { Card, Header, Table } from './Layout'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       covidData:[],
       statewise:[],
    }
  }

  componentDidMount(){
    axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
    .then((res) => {
      this.setState({
        covidData:res.data,
        statewise:res.data.regionData
      })
    })
  }
  
  render() {
    const {covidData, statewise} = this.state
    return (
      <div>
        <Header cardData={covidData} />
        <Card cardData={covidData} />
        <Table stateData={statewise} />
      </div>
    )
  }
}

export default App;
