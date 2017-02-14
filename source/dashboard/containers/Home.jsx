import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Header from '../../shared/components/Header.jsx'
import Indicator from '../../indicators/components/Indicator.jsx'
import Graphics from '../../graphics/components/Graphics.jsx'

require('react-datepicker/dist/react-datepicker-cssmodules.css');


const startDate = moment().format("YYYY-MM-DD");

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            date: startDate,
            datePicker: ''
        };
    }

    async componentDidMount() {
        this.setState({
            date: startDate,
            datePicker: moment(startDate)
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="date-input">
                    <DatePicker
                        selected={this.state.datePicker}
                        className="date-picker"
                        dateFormat="YYYY-MM-DD"
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