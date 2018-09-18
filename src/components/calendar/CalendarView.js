import React, { Component } from 'react';
import { CalendarHelper } from './CalendarHelper';
import './Calendar.css';

class CalendarView extends Component {

    constructor(props) {
        super(props);
        const helper = new CalendarHelper();
        const calendarDates = helper.getCalendarDates(this.props.startDate, this.props.numberOfDays);
        console.log(calendarDates);
    }

    render() {
        return (<div>CalendarView</div>);
    }

}

export { CalendarView };
