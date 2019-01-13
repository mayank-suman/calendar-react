import React, {Component} from "react";

import { lastTenYears, formatDate} from "../../calendar_data";

export default class YearChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear : null 
        }
    }

    handleSelect = (ev) => {
        this.setState({selectedYear : ev.target.value});
        this.props.onYearChange(parseInt(ev.target.value));
    }

    renderYears = () => {
        return lastTenYears().map(y => {
            return (
                <option key={y} value={y} >{y}</option>
            )
        });
    }

    componentWillMount() {
        let defaultYear = new formatDate().getDatePart('year');
        this.setState({selectedYear : defaultYear});
        this.props.onYearChange(parseInt(defaultYear));
    }    

    render () {
        const selectedYear = this.state.selectedYear;

        return (
            <div className='input-group yearsDropdown'>
                <select 
                    className='custom-select'
                    onChange={this.handleSelect} 
                    value={selectedYear}    
                >
                    {this.renderYears()}
                </select>
            </div>
        )
    }
}