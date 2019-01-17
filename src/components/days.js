import React, { Component } from "react";

import { getDaysInMonth, formatDate, isValidDate } from "../calendar_data";
import Weeks from "./static_weeks";
import MonthsChanger from "./header/monthsChanger";
import YearChanger from "./header/yearChanger";

class Days extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedMonthId: null, selectedYear: null };
    }

    componentWillMount() {
        let { selectedMonthId, selectedYear } = this.props.match.params;
        this.setState({
            selectedMonthId: selectedMonthId, 
            selectedYear: selectedYear
        });
    }

    handleMonthChange = (selectedMonthId) => {
        this.setState({ selectedMonthId });
    }

    handleYearChange = (selectedYear) => {
        this.setState({ selectedYear });
    }

    render() {
        let { selectedMonthId, selectedYear } = this.props.match.params;
        let daysToRender = [];
        const allDaysObj = getDaysInMonth(Number(selectedMonthId), Number(selectedYear));
        console.log(selectedMonthId, selectedYear);
        console.log('allDaysObj', allDaysObj);
        Object.entries(allDaysObj).forEach(([dpIdx, dateType]) => {
            dateType.forEach((d, did) => {
                let greyColor = dpIdx !== 'currentMonthDays' ? '#999' : '';
                daysToRender.push(
                    <div key={`${dpIdx}_${did}`} className='border-left text-center' style={{ display: 'inline-block', width: 'calc(100% / 7)', color: greyColor }}>
                        {isValidDate(d) ? new formatDate(d).getDatePart('date') : d}
                    </div>);
            });
        });
        return (
            <div>
                <div className="header">
                    <MonthsChanger
                        onMonthChange={this.handleMonthChange}
                        selectedYear={selectedYear}
                        selectedMonthId={selectedMonthId}
                    />
                    <YearChanger
                        onYearChange={this.handleYearChange}
                        selectedYear={selectedYear}
                        selectedMonthId={selectedMonthId}
                    />

                    <br clear='both' />
                </div>
                <Weeks />
                {daysToRender}
            </div>
        );
    }
}

export default Days;