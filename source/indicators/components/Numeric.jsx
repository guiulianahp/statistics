import React, { Component, PropTypes } from 'react';
import {Bar} from 'react-chartjs-2';
import { Panel } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import StatWidget from '../../shared/components/StatWidget/StatWidget.jsx'

class Numeric extends Component {
    render() {
        return(
            <div className="col-md-3">
                <StatWidget
                    style={this.props.panelHead}
                    icon="fa fa-comments fa-5x"
                    count="26"
                    headerText="New Comments!"
                    footerText="View Details"
                />

            </div>
        )
    }
}

export default Numeric;