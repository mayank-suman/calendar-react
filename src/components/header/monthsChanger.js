import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import { months, getlastMonth, getNextMonth } from "../../calendar_data";

class MonthsChanger extends Component {
    constructor(props) {
        super(props);
    }

    handleSelectChange = (ev) => {
        this.props.onMonthChange(parseInt(ev.target.value));
    }

    handleNextClick = () => {
        let { selectedMonthId } = this.props;
        selectedMonthId = Number(selectedMonthId);
        let nextMonth = parseInt(getNextMonth(selectedMonthId));
        this.props.onMonthChange(nextMonth);
        this.props.history.push(`/${nextMonth}/${this.props.selectedYear}`);
    }

    handlePrevClick = () => {
        let { selectedMonthId } = this.props;
        selectedMonthId = Number(selectedMonthId);
        let lastMonth = parseInt(getlastMonth(selectedMonthId));
        this.props.onMonthChange(lastMonth);
        this.props.history.push(`/${lastMonth}/${this.props.selectedYear}`);
    }

    renderMonths = () => months.map(m => <option key={m.id} value={m.id} >{m.name}</option>);

    render() {
        const currentMonthId = this.props.selectedMonthId;
        return (
            <div className="monthDropdown input-group mb-3">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-primary"
                        id="prevMonth"
                        onClick={this.handlePrevClick}
                    >
                        &laquo; Previous
                    </button>
                </div>
                <select className="custom-select"
                    onChange={this.handleSelectChange}
                    value={currentMonthId}
                >
                    {this.renderMonths(currentMonthId)}
                </select>
                <div className="input-group-append">
                    <button
                        className="btn btn-primary inline"
                        id="nextMonth"
                        onClick={this.handleNextClick}
                    >
                        Next &raquo;
                </button>
                </div>
            </div>
        )
    }
}

export default withRouter(MonthsChanger);