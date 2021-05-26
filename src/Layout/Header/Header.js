import React, { Component } from 'react';
import moment from 'moment';
import './header.css'

class Header extends Component {
    render() {
        const {cardData} = this.props;
        return (
            <div>
                <div className="header_covid_heading">
                    <h2>Covid19<span> - </span>INDIA</h2>
                    <hr />
                    <p>{moment(cardData.lastUpdatedAtApify).format('lll')}</p>
                </div>
            </div>
        )
    }
}

export default Header
