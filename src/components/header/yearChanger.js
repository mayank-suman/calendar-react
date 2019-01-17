import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import { lastTenYears } from "../../calendar_data";

class YearChanger extends Component {
    constructor(props) {
        super(props);
    }

    handleSelect = (ev) => {
        let newVal = ev.target.value;
        this.props.onYearChange(parseInt(newVal));
        this.props.history.push(`/${this.props.selectedMonthId}/${newVal}`);
    }

    renderYears = () => lastTenYears().map(y => <option key={y} value={y} >{y}</option>);

    render() {
        const selectedYear = this.props.selectedYear;
        //console.log('year changer', this.props);

        return (
            <div className='input-group yearsDropdown'>
                {
                    selectedYear ? 
                        <select
                            className='custom-select'
                            onChange={this.handleSelect}
                            value={selectedYear}
                        >
                            {this.renderYears()}
                        </select>
                    : null
                }
            </div>
        )
    }
}

export default withRouter(YearChanger);