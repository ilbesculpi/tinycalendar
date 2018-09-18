import React, { Component } from 'react';
import { CalendarControls, CalendarView } from '../../components/calendar/Calendar';
import './Home.css';

class HomePage extends Component {

    render() {
        return (<div className="container-fluid">
            <h1>Tiny Calendar</h1>
            <div className="row">
                <div className="col-sm-4">
                    <CalendarControls />
                </div>
                <div className="col-sm-8">
                    <CalendarView />
                </div>
            </div>
        </div>);
    }

}

export { HomePage };
