import axios from 'axios'
import React, { Component } from 'react'
import { Card, CaseChart, Header, Table } from './Layout'
import DistrictShow from './Layout/DistrictWise/DistrictShow'
import Footer from './Layout/Footer/Footer'
import IndiaMap from './Layout/Mapview/IndiaMap'
import Vaccinate from './Layout/Vaccinated/Vaccinate'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       covidData:[],
       statewise:[],
       statewisedata:[],
       testedData:[],
       districtwise:[],
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
        testedData:res.data.tested,
      })
    }) 

    axios.get("https://api.covid19india.org/state_district_wise.json")
    .then((res) => {
      this.setState({
        districtwise:res.data
      })
    })
  }
  
  render() {
    const {covidData, statewise, statewisedata, testedData, districtwise} = this.state
    return (
      <div>
        <Header cardData={covidData} />
        <Card cardData={covidData} />
        <IndiaMap statesData={statewisedata} />
        <Table stateData={statewise} myVaccinateData={testedData} />
        <DistrictShow myDistrictData={districtwise} />
        <CaseChart graphData={statewise} />
        <Vaccinate myVaccinateData={testedData} />
        <Footer />
      </div>
    )
  }
}

export default App;
