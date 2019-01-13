import React, { Component } from "react";

import { months, formatDate, getlastMonth, getNextMonth } from "../../calendar_data";

export default class MonthsChanger extends Component {
    constructor(props) {
        super(props);

        this.state = { currentMonthId: null }
    }

    handleSelectChange = (ev) => {
        this.setState({ currentMonthId: ev.target.value });
        this.props.onMonthChange(parseInt(ev.target.value));
    }

    handleNextClick = () => {
        let { currentMonthId } = this.state;
        let nextMonth = parseInt(getNextMonth(currentMonthId));
        this.setState({ currentMonthId: nextMonth });
        this.props.onMonthChange(nextMonth);
    }

    handlePrevClick = () => {
        let { currentMonthId } = this.state;
        let lastMonth = parseInt(getlastMonth(currentMonthId));
        this.setState({ currentMonthId: lastMonth });
        this.props.onMonthChange(lastMonth);
    }

    renderMonths = () => {
        return months.map(m => {
            return (
                <option key={m.id} value={m.id} >
                    {m.name}
                </option>
            )
        });
    }

    componentWillMount() {
        let defaultMonthId = new formatDate().getDatePart('month').id;
        this.setState({ currentMonthId: defaultMonthId });
        this.props.onMonthChange(parseInt(defaultMonthId));
    }

    render() {
        const currentMonthId = this.state.currentMonthId;
        return (
            <div className="input-group mb-3 monthDropdown">
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