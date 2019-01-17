export const weekDays = [{
    number: 0,
    name: 'Sunday'
},
{
    number: 1,
    name: 'Monday'
},
{
    number: 2,
    name: 'Tuesday'
},
{
    number: 3,
    name: 'Wednesday'
},
{
    number: 4,
    name: 'Thursday'
},
{
    number: 5,
    name: 'Friday'
},
{
    number: 6,
    name: 'Saturday'
},
];

export const months = [{
    id: 0,
    name: 'January',
    shortName: 'Jan'
},
{
    id: 1,
    name: 'February',
    shortName: 'Feb'
},
{
    id: 2,
    name: 'March',
    shortName: 'Mar'
},
{
    id: 3,
    name: 'April',
    shortName: 'Apr'
},
{
    id: 4,
    name: 'May',
    shortName: 'May'
},
{
    id: 5,
    name: 'June',
    shortName: 'Jun'
},
{
    id: 6,
    name: 'July',
    shortName: 'Jul'
},
{
    id: 7,
    name: 'August',
    shortName: 'Aug'
},
{
    id: 8,
    name: 'September',
    shortName: 'Sep'
},
{
    id: 9,
    name: 'October',
    shortName: 'Oct'
},
{
    id: 10,
    name: 'November',
    shortName: 'Nov'
},
{
    id: 11,
    name: 'December',
    shortName: 'Dec'
}
];

export const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d);
}

export const currentDate = () => new Date();


export const getDaysInMonth = (month, year) => {
    // Since no month has fewer than 28 days
    var totalDaysToReturn = [];
    var date = new Date(year, month, 1);
    var days = [];
    var PreviousMonthDays = getPrevMonthDays(month, year);
    //  console.log('month', month, 'date.getMonth()', date.getMonth())
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    var NextMonthDays = getNextMonthDays(PreviousMonthDays, days);
    totalDaysToReturn = {PreviousMonthDays, currentMonthDays : days, NextMonthDays};
    //console.log(totalDaysToReturn);
    return totalDaysToReturn;
};

function getPrevMonthDays(month, year) {
    var daysToReturn = [];
    var lastMonthDay = new Date(year, month, 0);
    if (lastMonthDay.getDay() == 6) return [];
    else {
        var weekDay = lastMonthDay.getDay();
        var lastDate = lastMonthDay.getDate();
        for (let i = 1; i <= weekDay + 1; i++) {
            daysToReturn.push(lastDate);
            lastDate = lastDate - 1;
        }
        return daysToReturn.reverse();
    }
}

function getNextMonthDays(prev, current) {
    var remainingDaysToReturn = [];
    var remainingDaysforCal = 35 - (prev.length + current.length);
    if (remainingDaysforCal == 0) return [];
    else {
        for (let i = 1; i <= remainingDaysforCal; i++) {
            remainingDaysToReturn.push(i);
        }
        return remainingDaysToReturn;
    }
}

export class formatDate {
    constructor(date) {
        this.date = date || currentDate();
    }

    getDatePart(name) {
        const dateArray = new Date(this.date).toDateString().split(' ');
        switch (name) {
            case 'day':
                return dateArray[0]
            case 'month':
                return months.find(m => m.shortName === dateArray[1]);
            case 'date':
                return dateArray[2]
            case 'year':
                return dateArray[3]
            default:
                return dateArray;
        }
    }
}

export const lastTenYears = () => {
    let currentYear = new formatDate(currentDate()).getDatePart('year');
    let yearsArr = [];
    let i = 10;

    while (i > 0) {
        yearsArr.push(parseInt(currentYear));
        currentYear = currentYear - 1;
        i--;
    }

    return yearsArr;
}

export const getlastMonth = (month) => {
    if (month === 0) {
        return 11;
    } else {
        return (month - 1)
    }
}

export const getNextMonth = (month) => {
    if (month === 11) {
        return 0;
    } else {
        return (month + 1)
    }
}

//console.log(getlastMonth(0));

