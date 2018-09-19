import React, { Component } from 'react';
import { CalendarHelper } from './CalendarHelper';
import './Calendar.css';

class CalendarView extends Component {

    calculateDates() {

        console.log('CalendarView :: calculateDates()');

        const helper = new CalendarHelper();

        const calendarDates = helper.getCalendarDates(this.props.startDate, this.props.numberOfDays);
        
        const renderDays = helper.prepareDatesForRender(calendarDates);
        
        this.renderDays = renderDays;

        console.log('startDate', this.props.startDate);
        console.log('numberOfDays', this.props.numberOfDays);
        //console.log('calendarDates = ', calendarDates);
        console.log('RENDER DAYS = ', renderDays);
    }

    render() {
        this.calculateDates();
        return (<div>CalendarView</div>);
    }

}

export { CalendarView };
