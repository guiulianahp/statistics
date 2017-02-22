import React, { Component, PropTypes } from 'react';
import api from '../../api.js'
import { Panel } from 'react-bootstrap';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import moment from 'moment';
import VisitModel from '../../modules/visits'

// Data
const averageServiceTimeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'],
    datasets: [
        {
            label: 'Minutes of service',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [35, 40, 56, 34, 38, 40, 33, 43, 44, 30, 60, 33]
        }
    ]
};

const dataObservations = {
    labels: [
        'Observation 1',
        'Observation 2',
        'Observation 3',
        'Observation 4'
    ],
    datasets: [{
        data: [300, 50, 100, 300],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#cc33ff'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#cc33ff'
        ]
    }]
};

const dataKmTraveled = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'],
    datasets: [
        {
            label: 'Vehicle 1',
            type:'line',
            data: [51, 65, 50, 49, 60, 37, 40, 34, 43, 44, 33, 40],
            fill: true,
            borderColor: '#6eddcc',
            backgroundColor: '#eafaf8',
            pointBorderColor: '#6eddcc',
            pointBackgroundColor: '#eafaf8',
            pointHoverBackgroundColor: '#6eddcc',
            pointHoverBorderColor: '#6eddcc',
            yAxisID: 'y-axis-1'
        },
        {
            label: 'Vehicle 2',
            type:'line',
            data: [40, 69, 45, 54, 65, 40, 49, 39, 49, 52, 39, 49],
            fill: true,
            borderColor: '#ffdf80',
            backgroundColor: '#fff9e6',
            pointBorderColor: '#ffdf80',
            pointBackgroundColor: '#fff9e6',
            pointHoverBackgroundColor: '#ffdf80',
            pointHoverBorderColor: '#ffdf80',
            yAxisID: 'y-axis-1'
        },
        {
            label: 'Vehicle 3',
            type:'line',
            data: [59, 50, 50, 59, 69, 45, 52, 44, 53, 60, 45, 55],
            fill: true,
            borderColor: '#ff8080',
            backgroundColor: '#ffe6e6',
            pointBorderColor: '#ff8080',
            pointBackgroundColor: '#ffe6e6',
            pointHoverBackgroundColor: '#ff8080',
            pointHoverBorderColor: '#ff8080',
            yAxisID: 'y-axis-1'
        }
    ]
};

const timeBetweenWindowsVisits = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'],
    datasets: [{
        type: 'bar',
        label: 'Dispatches delivered within time window',
        data: [90, 94, 80, 89, 90, 94, 80, 89, 99, 89, 90, 95],
        fill: true,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
    },{
        type: 'bar',
        label: 'Dispatches delivered outside of time window',
        data: [10, 6, 20, 11, 10, 6, 20, 11, 1, 11, 10, 5],
        fill: true,
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        hoverBackgroundColor: '#FF6384',
        hoverBorderColor: '#FF6384',
        yAxisID: 'y-axis-1'
    }]
};

// Options
const optionsMix = {
    responsive: true,
    tooltips: {
        mode: 'label'
    },
    elements: {
        line: {
            fill: false
        }
    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                }
            }
        ],
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                }
            },
            {
                type: 'linear',
                display: false,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                }
            }
        ]
    }
};

const pieOptions = {
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,

    // String - The colour of each segment stroke
    segmentStrokeColor: '#fff',

    // Number - The width of each segment stroke
    segmentStrokeWidth: 2,

    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 0, // This is 0 for Pie charts

    // Number - Amount of animation steps
    animationSteps: 100,

    // String - Animation easing effect
    animationEasing: 'easeOutBounce',

    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,

    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    responsive: true,

};

const chartOptions = {

    // /Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    // String - Colour of the grid lines
    scaleGridLineColor: 'rgba(0,0,0,.05)',

    // Number - Width of the grid lines
    scaleGridLineWidth: 1,

    // Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    // Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    // Boolean - Whether the line is curved between points
    bezierCurve: true,

    // Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,

    // Boolean - Whether to show a dot for each point
    pointDot: true,

    // Number - Radius of each point dot in pixels
    pointDotRadius: 4,

    // Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,

    // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,

    // Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    // Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,

    // Boolean - Whether to fill the dataset with a colour
    datasetFill: true,
    responsive: true,

    // String - A legend template
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% '
    + 'for (const i=0; i<datasets.length; i++){%><li><span style='
    + '"background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label)'
    + '{%><%=datasets[i].label%><%}%></li><%}%></ul>',

};


class Graphics extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            averageVisitStatus: []
        };
    }

    async componentDidMount() {
        let endDate = this.props.date.format('YYYY-MM-DD');
        let startDate = moment(this.props.date).subtract(30, 'days').format('YYYY-MM-DD');

        const [
            visits
        ] = await Promise.all([
            api.plan.getVisitsByDate(startDate, endDate)
        ]);

        let jsonVisitsStatus = new VisitModel(visits);

        this.setState({
            loading: false,
            averageVisitStatus: jsonVisitsStatus.getStatus()
        })
    }

    async componentWillReceiveProps(nextProps){

        this.setState({
            loading: true
        })

        let endDate = nextProps.date.format('YYYY-MM-DD');
        let startDate = moment(nextProps.date).subtract(30, 'days').format('YYYY-MM-DD');

        const [
            visits
        ] = await Promise.all([
            api.plan.getVisitsByDate(startDate, endDate)
        ]);

        let jsonVisitsStatus = new VisitModel(visits);

        this.setState({
            loading: false,
            averageVisitStatus: jsonVisitsStatus.getStatus()
        })

    }

    render() {
        return(

            <div className="graphics">
                <div className="row">
                    <div className="col-md-4">
                        <Panel header={<span> Average dispatch status </span>}
                               bsStyle="primary">
                            {this.state.loading && (
                                <div className="loading"></div>
                            )}
                            {!this.state.loading && (
                                <Pie data={this.state.averageVisitStatus} options={pieOptions} />
                            )}
                        </Panel>
                    </div>
                    <div className="col-md-4">
                        <Panel header={<span> Average Visit Time </span>}
                               bsStyle="primary">
                            <Bar data={averageServiceTimeData} options={chartOptions} />
                        </Panel>
                    </div>
                    <div className="col-md-4">
                        <Panel header={<span> Observations </span>}
                               bsStyle="primary">
                            <Doughnut data={dataObservations} options={pieOptions} />
                        </Panel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Panel header={<span> Average kilometers traveled per vehicle </span>}
                               bsStyle="primary">
                            <Line data={dataKmTraveled} options={optionsMix} />
                        </Panel>
                    </div>
                    <div className="col-md-6">
                        <Panel header={<span> Time window of dispatches </span>}
                               bsStyle="primary">
                            <Bar data={timeBetweenWindowsVisits} options={optionsMix} />
                        </Panel>
                    </div>
                </div>
            </div>
        )
    }
}

export default Graphics;