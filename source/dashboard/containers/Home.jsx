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
            date: moment(startDate)
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (date) {
        this.setState({
            date: date
        });
    }

    getStringDate () {
        return this.state.date.format('YYYY-MM-DD')
    }

    async componentDidMount() {
    }

    render() {
        let a = this.getStringDate();
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
                    <Indicator date={a}/>
                    <Graphics date={a}/>
                </div>
            </div>
        );
    }
}

export default Home;