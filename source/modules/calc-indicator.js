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
                icon: "M16 9l-2-4h-3v-2c0-0.55-0.45-1-1-1h-9c-0.55 0-1 0.45-1 1v8l1 1h1.268c-0.17 0.294-0.268 0.636-0.268 1 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.364-0.098-0.706-0.268-1h5.536c-0.17 0.294-0.268 0.636-0.268 1 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.364-0.098-0.706-0.268-1h1.268v-3zM11 9v-3h2.073l1.5 3h-3.573z",
                footerText: 'Daily indicator'

            },
            {
                panelHead: "panel-green",
                color: '#000',
                title: 'Created Routes',
                value: this.routes.length,
                icon: "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM1.5 8c0-3.59 2.91-6.5 6.5-6.5 1.712 0 3.269 0.662 4.43 1.744l-6.43 2.756-2.756 6.43c-1.082-1.161-1.744-2.718-1.744-4.43zM9.143 9.143l-4.001 1.715 1.715-4.001 2.286 2.286zM8 14.5c-1.712 0-3.269-0.662-4.43-1.744l6.43-2.756 2.756-6.43c1.082 1.161 1.744 2.718 1.744 4.43 0 3.59-2.91 6.5-6.5 6.5z",
                footerText: 'Daily indicator'

            },
            {
                panelHead: "panel-yellow",
                color: '#000',
                title: 'Average Load',
                value: averageLoad,
                icon: "M11 16h5l-4-16h-3l0.5 4h-3l0.5-4h-3l-4 16h5l0.5-4h5l0.5 4zM5.75 10l0.5-4h3.5l0.5 4h-4.5z",
                footerText: 'Daily indicator'
            },
            {
                panelHead: "panel-red",
                color: '#000',
                title: 'Average Time',
                value: averageTime,
                icon: "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707-1.414 1.414z",
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