import axios from 'axios'
import React, { Component } from 'react'
import { Card, CaseChart, Header, Table } from './Layout'
import IndiaMap from './Layout/Mapview/IndiaMap'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       covidData:[],
       statewise:[],
       statewisedata:[],
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

    axios.get("https://api.covid19india.org/data.json")
    .then((res) =>{
      this.setState({
        statewisedata:res.data.statewise,
      })
    })
  }
  
  render() {
    const {covidData, statewise, statewisedata} = this.state
    return (
      <div>
        <Header cardData={covidData} />
        <IndiaMap statesData={statewisedata} />
        <Card cardData={covidData} />
        <Table stateData={statewise} />
        <CaseChart graphData={statewise} />
      </div>
    )
  }
}

export default App;
