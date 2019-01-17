import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Days from "./days";
import { formatDate } from "../calendar_data";

export default class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedMonthId: null, selectedYear: null };
    }

    componentWillMount() {
        let defaultYear = new formatDate().getDatePart('year');
        let defaultMonthId = new formatDate().getDatePart('month').id;
        this.setState({
            selectedYear: defaultYear,
            selectedMonthId: defaultMonthId
        });
    }

    render() {
        const { selectedMonthId, selectedYear } = this.state;
        const url = `/${selectedMonthId}/${selectedYear}`;
        //console.log(this.state, url, selectedMonthId != null && selectedYear != null);
        return (
            <div
                style={{ width: 'calc(100% - 10px)', margin: '5px' }}
                className='border-bottom'
            >
                <div style={{ width: '100%' }}>
                    <Switch>
                        <Route exact path="/" render={() => (
                            selectedMonthId != null && selectedYear != null ?
                                (<Redirect to={url} />) : null
                        )} />
                        <Route path="/:selectedMonthId/:selectedYear" component={Days} />
                    </Switch>
                </div>
            </div>
        )
    }
}