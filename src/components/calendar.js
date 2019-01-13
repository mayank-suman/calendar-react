import React, {Component} from "react";
import { getDaysInMonth, formatDate, isValidDate } from "../calendar_data";
import Weeks from "./weeks";
import Header from "./header/index";

export default class Calender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedMonthId : null,
            selectedYear : null
        }
    }

    handleMonthChange = (selectedMonthId) => {
        this.setState({
            selectedMonthId
        })
    }

    handleYearChange = (selectedYear) => {
        this.setState({
            selectedYear
        })
    }

    renderDays = (selectedMonthId, selectedYear) => {
        const currentMonthDays = getDaysInMonth(selectedMonthId, selectedYear).map((d, did) => {
            return (
                <div 
                    key={did}
                    className='border-left text-center'
                    style={{display: 'inline-block', width: 'calc(100% / 7)'}}
                >
                    {isValidDate(d) ? new formatDate(d).getDatePart('date') : d}
                </div> 
            )
        });

        return currentMonthDays;
    }

    render () {
        const {selectedMonthId, selectedYear} = this.state;
        return (
            <div 
                style={{width : 'calc(100% - 10px)', margin: '5px'}} 
                className='border-bottom'
            >
                <Header 
                    onMonthChange={this.handleMonthChange} 
                    onYearChange={this.handleYearChange} 
                />
                <br clear='both' />
                <Weeks />
                <div style={{width: '100%'}}>
                    {selectedMonthId >= 0 && selectedYear >= 0 ? this.renderDays(selectedMonthId, selectedYear) : null}
                </div>

            </div>
        )
    }
}