
class VisitModel {
    constructor(visits) {
        this.visits = visits;
        this.labelPending = 'pending';
        this.labelCompleted = 'completed';
        this.labelFailed = 'failed';
    }

    getStatus() {
        let pending = 0;
        let completed = 0;
        let failed = 0;

        let model = this;
        this.visits.forEach(function (visit) {
           if (visit.status === model.labelPending) {
               pending+=1;
           } else if(visit.status === model.labelCompleted){
               completed+=1;
           } else if(visit.status === model.labelFailed){
               failed+=1;
           }
        });

        let averageVisitStatus = {
            labels: [
                'Completed',
                'Failed',
                'Pending'
            ],
            datasets: [{
                data: [completed, failed, pending],
                backgroundColor: [
                    '#41d3bd',
                    '#ff5252',
                    '#b3cccc'
                ],
                hoverBackgroundColor: [
                    '#41d3bd',
                    '#ff5252',
                    '#b3cccc'
                ]
            }]
        };

        return averageVisitStatus
    }

}

export default VisitModel;