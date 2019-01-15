import React, {Component} from "react";

import MonthsChanger from "./monthsChanger";
import YearChanger from "./yearChanger";

export default class Header extends Component {
    render () {
        return (
            <div className='monthsDropdown'>
                <MonthsChanger
                    onMonthChange={this.props.onMonthChange}
                    selectedYear={this.props.selectedYear}
                />
                <YearChanger 
                    onYearChange={this.props.onYearChange}
                    selectedMonthId={this.props.selectedMonthId}
                />
            </div>
        )
    }
}