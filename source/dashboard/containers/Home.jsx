import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Header from '../../shared/components/Header.jsx'
import Indicator from '../../indicators/components/Indicator.jsx'
import Graphics from '../../graphics/components/Graphics.jsx'

require('react-datepicker/dist/react-datepicker-cssmodules.css');


const startDate = moment();

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            date: moment(startDate),

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (dates) {
        this.setState({
            date: dates
        });
    }

    async componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <div className="date-input">
                    <DatePicker
                        selected={this.state.date}
                        className="date-picker"
                        dateFormat="YYYY-MM-DD"
                        onChange={this.handleChange}
                        withPortal
                    />
                </div>
                <div name="container">
                    <Indicator date={this.state.date}/>
                    <Graphics date={this.state.date}/>
                </div>
            </div>
        );
    }
}

export default Home;