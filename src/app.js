import React, {Component} from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Calendar from "./components/calendar";

export default class App extends Component {
    render () {
        return (
            <Router>
                    <Calendar />
            </Router>
        )
    }
}