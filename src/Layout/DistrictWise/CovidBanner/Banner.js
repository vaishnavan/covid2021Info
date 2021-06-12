import React, { Component } from 'react'
import './covidbanner.css';

class Banner extends Component {
    render() {
        return (
            <div>
                <div  className="covidDistrict_banner">
                    <div className="DistrictDisplay_content">
                        <p>Please Select the above selectbox to view Covid19 Cases based on Districtwise</p>
                        <ul style={{margin:"20px 0"}}>
                            <li>Wear Mask</li>
                            <li>Wash your Hands Frequently</li>
                            <li>Mantain social Distancing</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner
