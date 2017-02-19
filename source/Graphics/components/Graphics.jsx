import React, { Component, PropTypes } from 'react';
import api from '../../api.js'
import { Panel } from 'react-bootstrap';
// import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const dataPie = {
    labels: [
        'Completed',
        'failed',
        'pending'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
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

const donutOptions = {
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,

    // String - The colour of each segment stroke
    segmentStrokeColor: '#fff',

    // Number - The width of each segment stroke
    segmentStrokeWidth: 2,

    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts

    // Number - Amount of animation steps
    animationSteps: 100,

    // String - Animation easing effect
    animationEasing: 'easeOutBounce',

    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,

    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    responsive: true,

    // String - A legend template
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% '
    + 'for (const i=0; i<segments.length; i++){%><li><span style='
    + '"background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%>'
    + '<%=segments[i].label%><%}%></li><%}%></ul>',

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


class Graphics extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
        };
    }

    async componentDidMount() {
        this.setState({
            loading: false,
        })
    }

    render() {
        return(

            <div className="graphics">

            </div>
        )
    }
}

export default Graphics;