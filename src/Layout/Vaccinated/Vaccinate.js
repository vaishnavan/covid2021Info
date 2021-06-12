import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './vaccinate.css';

class Vaccinate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             split:10,
             myType:''
        }
    }

    componentDidMount(){
        this.setState({
            myType:'one'
        })
    }



    handleClick = (type) => {
        switch (type) {
            case 'one':
                this.setState({
                    split:10,
                    myType:type,
                })
                break;
            case 'two':
                this.setState({
                    split:30,
                    myType:type,
                })
                break;
            case 'three':
                this.setState({
                    split:45,
                    myType:type,
                })
                break;
            default:
                break;
        }
    }
    
    render() {
        const {myVaccinateData} = this.props;
        const {split, myType} = this.state;
        const mytestStringData = myVaccinateData.sort((a,b) => Number(a.totalindividualsvaccinated) < Number(b.totalindividualsvaccinated) ? 1:-1)
        const data = {
            labels: mytestStringData.slice(0,split).map((data) => data.testedasof),
            datasets: [
                {
                    label: 'Count of Vaccinated people',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'pink',
                    borderColor: 'pink',
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
                    data: mytestStringData.slice(0,split).map((data) => Number(data.totalindividualsvaccinated)),
                },
            ],
        };
        return (
            <div data-aos="fade-in">
                <div className="vary_with_days">
                    <button className={ myType === 'one'? 'active':''} onClick={()=>this.handleClick('one')}>10 Days</button>
                    <button className={ myType === 'two'? 'active':''} onClick={()=>this.handleClick('two')}>30 Days</button>
                    <button className={ myType === 'three'? 'active':''} onClick={()=>this.handleClick('three')}>45 Days</button>
                </div>
                <div className="casegraph_data">
                    <Line className="casegraph_inner" data={data} />
                </div> 
            </div>
        )
    }
}

export default Vaccinate
