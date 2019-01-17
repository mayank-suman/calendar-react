import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import { months, getlastMonth, getNextMonth } from "../../calendar_data";

class MonthsChanger extends Component {
    constructor(props) {
        super(props);
    }

    // Helper function to update the Global History obj
    pushHistory(month) {
        this.props.history.push(`/${month}/${this.props.selectedYear}`);
    }

    // Helper function to update the month property and history 
    updateMonthProp(type) {
        let { selectedMonthId } = this.props;
        selectedMonthId = Number(selectedMonthId);
        let newMonth;
        if (type === 'next') {
            newMonth = parseInt(getNextMonth(selectedMonthId)); 
        } else if (type === 'prev') {
            newMonth = parseInt(getlastMonth(selectedMonthId)); 
        }  else {
            newMonth = selectedMonthId
        }
        this.props.onMonthChange(newMonth);
        this.pushHistory(newMonth);
    }

    handleNextClick = () => {
        this.updateMonthProp('next');
    }

    handlePrevClick = () => {
        this.updateMonthProp('prev');
    }

    handleSelectChange = (ev) => {
        let month = ev.target.value;
        this.props.onMonthChange(parseInt(month));
        this.pushHistory(month);
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