import React, { Component } from 'react';
import {CountUp} from 'use-count-up';
import Aos from 'aos';
import "aos/dist/aos.css";
import './card.css';

class Card extends Component {

    componentDidMount() {
        let timer = setTimeout(() => {
            Aos.init({
                duration: 1000,
                easing: 'ease-in-out',
            })
        }, 1000)
        return () => clearTimeout(timer);
    }

    render() {
        const {cardData} = this.props;
        return (
            <div>
                <div  data-aos="fade-up"  className="card_display_main">
                    <div className="card_display">
                        <div className="card_head_red">
                            <h3>Total Cases</h3>
                            <h3 style={{margin:"10px 0"}}><CountUp isCounting  end={cardData.totalCases} delay={3} thousandsSeparator="," easing="linear" duration={5}></CountUp></h3>
                        </div>
                    </div>
                    <div  className="card_display">
                        <div className="card_head_blue">
                            <h3>Active Cases</h3>
                            <h3 style={{margin:"10px 0"}}><CountUp isCounting  end={cardData.activeCases} delay={3} thousandsSeparator="," easing="linear" duration={5}></CountUp></h3>
                            <div  className="newly_active">
                                <p>New Active Cases</p>
                                <p><CountUp isCounting  end={cardData.activeCasesNew} delay={3} thousandsSeparator="," easing="linear" duration={5}></CountUp></p>
                            </div>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card_head_green">
                            <h3>Recovered Cases</h3>
                            <h3 style={{margin:"10px 0"}}><CountUp isCounting  end={cardData.recovered} delay={3} thousandsSeparator="," easing="linear" duration={5}></CountUp></h3>
                            <div className="newly_active">
                                <p>Newly Recovered</p>
                                <p><CountUp isCounting  end={cardData.recoveredNew} delay={3} thousandsSeparator="," easing="linear" duration={5}></CountUp></p>
                            </div>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card_head_gray">
                            <h3>Total Deaths</h3>
                            <h3 style={{margin:"10px 0"}}><CountUp isCounting  end={cardData.deaths} delay={3} thousandsSeparator="," easing="linear" duration={5}></CountUp></h3>
                            <div className="newly_active">
                                <p>New Deaths</p>
                                <p><CountUp isCounting  end={cardData.deathsNew} delay={3} thousandsSeparator="," easing="linear" duration={5}></CountUp></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
