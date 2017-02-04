import React, { Component } from 'react';
import Header from '../../shared/components/Header.jsx'
import Graphics from '../../Graphics/components/Graphics.jsx'


const dataDoughnut = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
        };
    }

    async componentDidMount() {
        this.setState({
            loading: false,
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div name="container">
                    {this.state.loading && (
                        <h2>loading data...</h2>
                    )}
                    <div className="animate">
                        <div className="row">
                            <div className="col-md-6">
                                <Graphics/>
                            </div>
                            <div className="col-md-6">
                                <Graphics/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;