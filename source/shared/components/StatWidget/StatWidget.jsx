import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class StatWidget extends Component{ // eslint-disable-line

    render() {
        return (
            <Panel
                bsStyle={this.props.style}

                header={<div className="row">
                    <div className="col-xs-3">
                        <i
                            className={this.props.icon}
                        />
                    </div>
                    <div className="col-xs-9 text-right">
                        <div className="huge">
                            {
                                this.props.count
                            }
                        </div>
                        <div>
                            {
                                this.props.headerText
                            }
                        </div>
                    </div>
                </div>}

                footer={
                    <div>
            <span className="pull-left">
              {
                  this.props.footerText
              }
            </span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                    </div>}
            />

        );
    }
}
StatWidget.propTypes = {
    style: React.PropTypes.string,
    count: React.PropTypes.string,
    headerText: React.PropTypes.string,
    icon: React.PropTypes.string,
    footerText: React.PropTypes.string,
}
export default StatWidget;