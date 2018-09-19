import React, { Component } from 'react';
import { CalendarHelper } from './CalendarHelper';
import { CalendarItem } from './CalendarItem';
import './Calendar.css';

/**
 * Renders a series of Calendars from the start date specified as input,
 * spaning a number of days.
 */
class CalendarView extends Component {

    calculateDates() {

        console.log('CalendarView :: calculateDates()');

        const helper = new CalendarHelper();

        const calendarDates = helper.getCalendarDates(this.props.startDate, this.props.numberOfDays);
        
        const datesToRender = helper.prepareDatesForRender(calendarDates);
        
        console.log('startDate', this.props.startDate);
        console.log('numberOfDays', this.props.numberOfDays);
        //console.log('calendarDates = ', calendarDates);
        console.log('DATES = ', datesToRender);
        return datesToRender;
    }

    render() {
        const dates = this.calculateDates();
        const hasDates = dates.length > 0;
        const rows = hasDates
            ? dates.map((row, index) => {
                    return (<CalendarItem key={ index }
                        items={ row } />);
                    })
            : '';
        return (<div>
            { rows }
        </div>);
    }

}

export { CalendarView };
