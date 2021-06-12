import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import './caseChart.css';

export class CaseChart extends Component {

    render() {
        const {graphData} = this.props;
        const mySortData = graphData.sort((a,b) => a.totalInfected<b.totalInfected? 1:-1)
        const data = {
            labels: mySortData.slice(0,5).map((data) => data.region),
            datasets: [
                {
                    label: 'Top HighCase Alert States',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: mySortData.slice(0,5).map((data) => data.totalInfected),
                },
            ],
        };

        const data1 = {
            labels: graphData.map((data) => data.region),
            datasets: [
                {
                    label: 'Case Recovered Covid19',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: graphData.map((data) => data.recovered),
                },
            ],
        };

        const data2 = {
            labels: graphData.map((data) => data.region),
            datasets: [
                {
                    label: 'Death cases Covid19',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: graphData.map((data) => data.deceased),
                },
            ],
        };

        return (
            <div>
                <div data-aos="fade-up" className="casegraph_data">
                    <Line className="casegraph_inner" data={data} />
                </div>      
                <div data-aos="fade-up" className="casegraph_data">
                    <Line className="casegraph_inner" data={data1} />
                </div>   
                <div data-aos="fade-up" className="casegraph_data">
                    <Line className="casegraph_inner" data={data2} />
                </div>   
                  
            </div>
        )
    }
}

export default CaseChart
