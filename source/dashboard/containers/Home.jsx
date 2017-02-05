import React, { Component } from 'react';
import Header from '../../shared/components/Header.jsx'
import Indicator from '../../indicators/components/Indicator.jsx'

const dateInit = "2017-02-05";

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            date: dateInit,
        };
    }

    async componentDidMount() {
        this.setState({
            date: dateInit,
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div name="container">

                    <Indicator date={this.state.date}/>
                </div>
            </div>
        );
    }
}

export default Home;