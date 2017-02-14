import moment from 'moment'

class CalculationOfIndicator {
    constructor(vehicles, routes) {
        this.vehicles = vehicles;
        this.routes = routes;
    }

    getNumeric() {
        let averageTime = calculateAverageTime(this.routes);
        let averageLoad = calculateAverageLoad(this.routes);

        let numericJson = [
            {
                panelHead: "panel-primary",
                color: '#000',
                title: 'Used Vehicles',
                value: this.vehicles.length,
                icon: "fa fa-truck fa-5x",
                footerText: 'Daily indicator'

            },
            {
                panelHead: "panel-green",
                color: '#000',
                title: 'Created Routes',
                value: this.routes.length,
                icon: "fa fa-map fa-5x",
                footerText: 'Daily indicator'

            },
            {
                panelHead: "panel-yellow",
                color: '#000',
                title: 'Average Load',
                value: averageLoad,
                icon: "fa fa-balance-scale fa-5x",
                footerText: 'Daily indicator'
            },
            {
                panelHead: "panel-red",
                color: '#000',
                title: 'Average Time',
                value: averageTime,
                icon: "fa fa-clock-o fa-5x",
                footerText: 'Daily indicator'
            }
        ]
        return numericJson
    }

}

function calculateAverageLoad(routes) {
    let averageLoad = 0,
        totalLoad = 0,
        totalRoutes = 0,
        averageLoad2 = 0,
        totalLoad2 = 0,
        averageLoad3 = 0,
        totalLoad3 = 0;

    routes.forEach(function (route) {
        console.log(route);
        totalRoutes++;
        totalLoad += (route.total_load) ? route.total_load : 0;
        totalLoad2 += (route.total_load2) ? route.total_load2 : 0;
        totalLoad3 += (route.total_load3) ? route.total_load3 : 0;

    });

    averageLoad = isNaN(totalLoad / totalRoutes) ? 0 : (totalLoad / totalRoutes).toFixed(1);
    averageLoad2 = isNaN(totalLoad2 / totalRoutes) ? 0 : (totalLoad2 / totalRoutes).toFixed(1);
    averageLoad3 = isNaN(totalLoad3 / totalRoutes) ? 0 : (totalLoad3 / totalRoutes).toFixed(1);

    return averageLoad;
}

function calculateAverageTime(routes) {
    let averageTime, totalTime = 0, totalRoutes = 0;
    totalTime = moment.duration(0, "HH:mm");
    routes.map(function (route) {
        totalRoutes++;
        let duration = moment.duration(bdDateTohourAndMinutes(route.total_duration)).asMinutes();
        totalTime.add(duration, 'minutes');
    });
    let averageMinutes = isNaN(totalTime.asMinutes() / totalRoutes) ? 0 : (totalTime.asMinutes() / totalRoutes).toFixed(0);
    averageTime = moment.duration({'minutes': averageMinutes});
    return Math.floor(averageTime.asHours()) + moment.utc(averageTime.asMilliseconds()).format(":mm");
}

function bdDateTohourAndMinutes(duration) {
    let totalMinutes = 0,
        splitTime,
        days,
        hours,
        minutes,
        timeMinutes;
    let splitTimeFirst = duration.split(' ');
    if (splitTimeFirst.length > 1) {
        days = splitTimeFirst[0];
        totalMinutes += ((parseInt(days) * 24) * 60);
        splitTime = splitTimeFirst[1].split(':');
        hours = splitTime[0];
        minutes = splitTime[1];
        timeMinutes = parseInt(hours * 60) + parseInt(minutes);
        totalMinutes += timeMinutes;
    } else {
        splitTime = splitTimeFirst[0].split(':');
        hours = splitTime[0];
        minutes = splitTime[1];
        timeMinutes = parseInt(hours * 60) + parseInt(minutes);
        totalMinutes += timeMinutes;
    }
    minutes = totalMinutes % 60;
    hours = totalMinutes / 60;
    let splitted = String(hours).split('.');
    return (("0" + Math.floor(hours)).slice((splitted[0].length * -1)) + ":" + ("0" + minutes).slice(-2));
}

export default CalculationOfIndicator;