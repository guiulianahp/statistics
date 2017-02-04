import React, { Component, PropTypes } from 'react';
import api from '../../api.js'
import {Bar} from 'react-chartjs-2';

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
const dataGraphic = {
    labels: ['January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'November', 'December'],
    datasets: [
        {
            label: 'Vehicles',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};
class Graphic extends Component {
    constructor(props){
        super(props);

        this.state = {
            dataGraphic: [],
            loading: true,
        };
    }

    async componentDidMount() {
        const t1ChartEl= document.getElementById("teamOneCanvas");
        const vehicles = await api.me.meUser();
        const dataGraphic = {
            labels: ['January', 'February', 'March',
                'April', 'May', 'June',
                'July', 'August', 'September',
                'November', 'December'],
            datasets: [
                {
                    label: 'Vehicles',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        this.setState({
            dataGraphic,
            loading: false,
        })
    }

    render() {
        return(
            <div className="col-md-6">
                <Bar
                    data={this.state.dataGraphic}
                    options={chartOptions}
                />
            </div>
        )
    }
}

Graphic.propTypes= {
    id: PropTypes.string,
};

export default Graphic;