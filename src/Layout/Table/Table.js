import React, { Component } from 'react';
import numeral from 'numeral';
import Typed from 'react-typed';
import './table.css';

class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:''
        }
    }

    handleCahnge = (e) => {
        this.setState({
            search:e.target.value
            
        })
    }
    
    render() {
        const {stateData, myVaccinateData} = this.props;
        const myTestedData = myVaccinateData.reverse().slice(0,1).map((data,i) => data.totalsamplestested)
        const {search} = this.state;
        const filterData = stateData.filter((data) => {
            return data.region.toLowerCase().includes(search.toLowerCase())
        })
        return (
            <div>
                <div className="covid_table_main">
                    <div data-aos="fade-up" className="covid_table_head">
                        <h2>India</h2>
                        <span style={{margin:"10px"}}>Tested {numeral(myTestedData).format(",")} As per today source</span>
                    </div>
                    
                    <div data-aos="fade-up" className="covid_table">
                            <div className="covid_table_search">
                                <Typed
                                    strings={[
                                        'Tamil Nadu',
                                        'Maharashtra',
                                        'Kerala',
                                        'Karnataka',
                                        'Madhya Pradesh',
                                        'Telangana'
                                        ]}
                                        typeSpeed={100}
                                        backSpeed={100}
                                        attr="placeholder"
                                        loop
                                    >
                                    <input type="text" onChange={this.handleCahnge} />
                                </Typed>
                            </div>
                        
                        <table>
                            
                            <tr>
                                <th>S.No</th>
                                <th>State Name/ UT</th>
                                <th>Total Cases</th>
                                <th>Active Cases</th>
                                <th>New Active Cases</th>
                                <th>Recovered</th>
                                <th>New Recovered</th>
                                <th>Deaths</th>
                                <th>New Deaths</th>
                            </tr>
                            {filterData.map((data,i) => {
                                return(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{data.region}</td>
                                        <td>{numeral(data.totalInfected).format(',')}</td>
                                        <td>{numeral(data.activeCases).format(',')}</td>
                                        <td>{numeral(data.newInfected).format(',')}</td>
                                        <td>{numeral(data.recovered).format(',')}</td>
                                        <td>{numeral(data.newRecovered).format(',')}</td>
                                        <td>{numeral(data.deceased).format(',')}</td>
                                        <td>{data.newDeceased}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table
