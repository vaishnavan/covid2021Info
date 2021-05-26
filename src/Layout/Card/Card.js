import React, { Component } from 'react'
import numeral from 'numeral';
import './card.css';

class Card extends Component {
    render() {
        const {cardData} = this.props;
        return (
            <div>
                <div className="card_display_main">
                    <div className="card_display">
                        <div className="card_head">
                            <h2>Total Cases</h2>
                            <h3>{numeral(cardData.totalCases).format(',')}</h3>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card_head">
                            <h2>Active Cases</h2>
                            <h3>{numeral(cardData.activeCases).format(',')}</h3>
                            <div className="newly_active">
                                <p>New Active Cases</p>
                                <p>{numeral(cardData.activeCasesNew).format(',')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card_head">
                            <h2>Recovered</h2>
                            <h3>{numeral(cardData.recovered).format(',')}</h3>
                            <div className="newly_active">
                                <p>Newly Recovered</p>
                                <p>{numeral(cardData.recoveredNew).format(',')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card_head">
                            <h2>Total Deaths</h2>
                            <h3>{numeral(cardData.deaths).format(',')}</h3>
                            <div className="newly_active">
                                <p>New Deaths</p>
                                <p>{numeral(cardData.deathsNew).format(',')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
