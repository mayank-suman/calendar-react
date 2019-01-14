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
        let daysToRender = [];
        const allDaysObj = getDaysInMonth(selectedMonthId, selectedYear);
        Object.entries(allDaysObj).forEach(([dpIdx, dateType]) => {
            dateType.forEach((d, did) => {
                let greyColor = dpIdx !== 'currentMonthDays' ? '#999' : '';
                daysToRender.push(
                    <div
                        key={`${dpIdx}_${did}`}
                        className='border-left text-center'
                        style={{ display: 'inline-block', width: 'calc(100% / 7)', color: greyColor }}
                    >
                        {isValidDate(d) ? new formatDate(d).getDatePart('date') : d}
                    </div>
                )
            })
        });

        return daysToRender;
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