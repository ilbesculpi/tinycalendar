import React, { Component } from 'react';
import './Calendar.css';

/**
 * Renders a form that allows updating the CalendarView.
 * It contain a date picker (date), 
 * an input for the number days (number)
 * and an input for the country code (text)
 */
class CalendarControls extends Component {

    render() {
        return (<form>
            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input name="startDate" type="date" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="numberOfDays">Number of Days</label>
                <input name="numberOfDays" type="number" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="countryCode">Country Code</label>
                <input name="countryCode" type="text" className="form-control" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>);
    }

}

export { CalendarControls };
