import React, { Component } from 'react';
import Banner from './CovidBanner/Banner';
import numeral from 'numeral';
import './districtshow.css';

class DistrictShow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            statedetails: [],
            show:false,
        }
    }


   
    
    handleChange = (e) => {
        console.log(e.target.value)
        const {myDistrictData} = this.props;
        const statenm = e.target.value;

        Object.keys(myDistrictData).map((item, i) => {
            console.log(myDistrictData[item])
            if (item === statenm) {
                this.setState({
                    statedetails: myDistrictData[item].districtData,
                    stateName: statenm,
                    show:true
                })
            }
            return true;
        })

    }

    render() {
        const {myDistrictData} = this.props;
        const { statedetails, show } = this.state;
        return (
            <div data-aos="fade-up" className="myDistrictData_main">
                <div style={{margin:"20px 0"}} className="myDistrictData_heading">
                    <h2>DistictWise Cases</h2>
                </div>
                <div className="myDistrictData_select">
                    <select onChange={this.handleChange}>
                        {
                            Object.keys(myDistrictData).map((item, i) => {
                                return (
                                    <option>{item}</option>
                                )

                            })
                        }
                    </select>
                </div>
                {show ?
                <>
                    <div className="zonewise_indicator">
                        <div className="casesWise_indi">
                            <div className="cases_indicator">
                                <div style={{background:"red"}} className="circle"></div>
                                <span>MoreThan 20,000 cases</span>
                            </div>
                            <div className="cases_indicator">
                                <div style={{background:"orange"}} className="circle"></div>
                                <span>10,000 to 20,000 cases</span>
                            </div>
                            <div className="cases_indicator">
                                <div style={{background:"green"}} className="circle"></div>
                                <span>below 10,000</span>
                            </div>
                        </div>
                        <div style={{margin:"8px 0"}} className="casesWise_indi">
                            <div className="cases_indicator">
                                <div style={{background:"red"}} className="circle"></div>
                                <span>Confirmed</span>
                            </div>
                            <div className="cases_indicator">
                                <div style={{background:"blue"}} className="circle"></div>
                                <span>Active</span>
                            </div>
                            <div className="cases_indicator">
                                <div style={{background:"green"}} className="circle"></div>
                                <span>Recovered</span>
                            </div>
                            <div className="cases_indicator">
                                <div style={{background:"white"}} className="circle"></div>
                                <span>Deaths</span>
                            </div>
                        </div>
                    </div>
                    <div  className="districtwise_card_main">
                        {
                        Object.keys(statedetails).map((item, i) => {
                            return (
                                <div className={statedetails[item].confirmed > 20000 ? 'red_alert_case':statedetails[item].confirmed > 10000 ? 'orange_alert_case':'normal_alert_case'}  key={i} >
                                    <div className="districtwise_card_Data">
                                        <div className="districwise_stateDetail">
                                            <span>{item}</span>
                                        </div>
                                        <div className="districwise_caseDetail">
                                        <span className="districwise_count_active">{numeral(statedetails[item].active).format(",")}</span><br></br>
                                        <span className="districwise_count_confirm">{numeral(statedetails[item].confirmed).format(",")}</span><br></br>
                                        <span className="districwise_count_recover">{numeral(statedetails[item].recovered).format(",")}</span><br></br>
                                        <span className="districwise_count_death">{numeral(statedetails[item].deceased).format(",")}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                </>
                :
                <>
                    <Banner  />
                </>
                }
                
            </div>
        )
    }
}

export default DistrictShow
