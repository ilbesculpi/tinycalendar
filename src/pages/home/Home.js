import React, { Component } from 'react';
import { CalendarControls, CalendarView } from '../../components/calendar/Calendar';
import './Home.css';

class HomePage extends Component {

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);

        // set initial values
        this.state = {
            startDate: '2018-07-15',
            numberOfDays: 90,
            countryCode: 'US'
        };

    }

    /**
     * Handle value changes for the CalendarControls component.
     * @param {*} values 
     */
    handleChange(values) {
        console.log('handleChange()', values);
        this.setState(values);
    }

    render() {
        return (<div className="container-fluid">
            <h1>Tiny Calendar</h1>
            <div className="row">
                <div className="col-sm-4">
                    <CalendarControls startDate={ this.state.startDate }
                        numberOfDays={ this.state.numberOfDays }
                        countryCode={ this.state.countryCode }
                        onChange={ this.handleChange } />
                </div>
                <div className="col-sm-8">
                    <CalendarView startDate={ this.state.startDate }
                        numberOfDays={ this.state.numberOfDays }
                        countryCode={ this.state.countryCode } />
                </div>
            </div>
        </div>);
    }

}

export { HomePage };
