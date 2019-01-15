import React, {Component} from "react";
import { withRouter } from 'react-router-dom'

import { lastTenYears, formatDate} from "../../calendar_data";

class YearChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear : null 
        }
    }

    handleSelect = (ev) => {
        let newVal = ev.target.value;
        this.setState({selectedYear : newVal});
        this.props.onYearChange(parseInt(newVal));
        this.props.history.push(`/${this.props.selectedMonthId}/${newVal}`);

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

export default withRouter(YearChanger);