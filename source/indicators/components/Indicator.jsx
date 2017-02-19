import React, { Component, PropTypes } from 'react';
import api from '../../api.js'
import { Panel } from 'react-bootstrap';
import styles from './Indicator.css';
import moment from 'moment';
import CalculationOfIndicator from '../../modules/calc-indicator'


import Numeric from './Numeric.jsx'

class Indicator extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataNumeric: [],
            loading: true,
        };
    }

    async componentDidMount() {
        let date = this.props.date.format('YYYY-MM-DD');
        const [
            vehicles,
            routes,
        ] = await Promise.all([
            api.plan.getVehiclesByDate(date),
            api.plan.getRoutesByDate(date),
        ]);

        let jsonIndicator = new CalculationOfIndicator(vehicles, routes);

        this.setState({
            dataNumeric: jsonIndicator.getNumeric(),
            loading: false,
        })
    }

    async componentWillReceiveProps(nextProps){

        let date = nextProps.date.format('YYYY-MM-DD');
        const [
            vehicles,
            routes,
        ] = await Promise.all([
            api.plan.getVehiclesByDate(date),
            api.plan.getRoutesByDate(date),
        ]);

        let jsonIndicator = new CalculationOfIndicator(vehicles, routes);

        this.setState({
            dataNumeric: jsonIndicator.getNumeric(),
            loading: false,
        })

    }

    render() {
       return(

            <div className={styles.indicator}>
                {this.state.loading && (
                    <div className="loading"></div>
                )}
                {this.state.dataNumeric
                    .map((numeric, idx) => <Numeric key={idx} {...numeric} />)}
            </div>
        )
    }
}

export default Indicator;