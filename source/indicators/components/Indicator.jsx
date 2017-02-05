import React, { Component, PropTypes } from 'react';
import api from '../../api.js'
import {Bar} from 'react-chartjs-2';
import { Panel } from 'react-bootstrap';
import styles from './Indicator.css';


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

        let date = this.props.date;
        //const routes = await api.me.getRoutesByDate(date);

        //let jsonIndicator = CalcIndicator(routes);

        let jsonIndicator = [
            {
                panelHead: "success",
                color: '#000',
                title: 'Vehicles',
                value: 30,
                icon: ''

            },
            {
                panelHead: "info",
                color: '#000',
                title: 'Vehicles',
                value: 30,
                icon: ''

            },
            {
                panelHead: "warning",
                color: '#000',
                title: 'Vehicles',
                value: 30,
                icon: ''

            },
            {
                panelHead: "danger",
                color: '#000',
                title: 'Vehicles',
                value: 30,
                icon: ''

            }
        ];

        this.setState({
            dataNumeric: jsonIndicator,
            loading: false,
        })
    }

    render() {
        return(
            <div className={styles.indicator}>
                {this.state.dataNumeric
                    .map((numeric, idx) => <Numeric key={idx} {...numeric} />)}
            </div>
        )
    }
}


export default Indicator;