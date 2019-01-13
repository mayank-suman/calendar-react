import React, {Component} from "react";

import MonthsChanger from "./monthsChanger";
import YearChanger from "./yearChanger";

export default class Header extends Component {
    render () {
        return (
            <div className='monthsDropdown'>
                <MonthsChanger
                    onMonthChange={this.props.onMonthChange} 
                />
                <YearChanger 
                    onYearChange={this.props.onYearChange}
                />
            </div>
        )
    }
}