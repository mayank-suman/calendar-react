import React, {Component} from "react";
import { weekDays } from "../calendar_data";

export default class Weeks extends Component {
    styles = {
        display: 'inline-block',
        width: 'calc(100% / 7)'
    }

    renderWeeks = () => {
        return weekDays.map(w => {
            return (
                <div 
                    className='border-bottom border-top border-left text-center' 
                    style={this.styles} 
                    key={w.number} 
                >
                    {w.name}
                </div>
            )
        })
    }

    render () {
        return (
            <div>
                { this.renderWeeks() }
            </div>
        )
    }
}