import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

class Numeric extends Component {
    render() {
        return(
            <div className = "col-md-3">
                <Panel
                    className = {this.props.panelHead}
                    header = {
                        <div className="row">
                            <div className="col-xs-3">
                                <i className={this.props.icon} />
                            </div>
                            <div className="col-xs-9 text-right">
                                <div className="huge">{ this.props.value }
                                </div>
                                <div>{this.props.title}
                                </div>
                            </div>
                        </div>
                    }
                    footer = {
                        <div>
                            <span className="pull-left">{this.props.footerText}</span>
                            <span className="pull-right"></span>
                            <div className="clearfix" />
                        </div>
                    }
                />
            </div>
        )
    }
}

export default Numeric;