import React, { Component } from 'react';
import { CalendarControls, CalendarView } from '../../components/calendar/Calendar';
import * as moment from 'moment';
import './Home.css';

class HomePage extends Component {

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);

        // set initial values
        const firstDateOfMonth = moment().startOf('month').startOf('day');
        const lastDayOfMonth = moment().endOf('month').endOf('day');
        const diff = moment.duration( lastDayOfMonth.diff(firstDateOfMonth) );
        const numberOfDays = parseInt( diff.as('days') ) + 1;
        //console.log('diff', diff);
        //console.log('numberOfDays', numberOfDays);

        this.state = {
            startDate: firstDateOfMonth.format('YYYY-MM-DD'),
            numberOfDays: numberOfDays,
            countryCode: 'US'
        };

    }

    /**
     * Handle value changes for the CalendarControls component.
     * @param {*} values 
     */
    handleChange(values) {
        console.log('values changed', values);
        this.setState(values);
    }

    render() {
        return (<div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
                <CalendarControls startDate={ this.state.startDate }
                    numberOfDays={ this.state.numberOfDays }
                    countryCode={ this.state.countryCode }
                    onChange={ this.handleChange } />
            </div>
            <div className="col-sm-6 col-md-8 col-lg-9">
                <CalendarView startDate={ this.state.startDate }
                    numberOfDays={ this.state.numberOfDays }
                    countryCode={ this.state.countryCode } />
            </div>
        </div>);
    }

}

export { HomePage };
