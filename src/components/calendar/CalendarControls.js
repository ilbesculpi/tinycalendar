import React, { Component } from 'react';
import './Calendar.css';

/**
 * Renders a form that allows updating the CalendarView.
 * It contain a date picker (date), 
 * an input for the number days (number)
 * and an input for the country code (text)
 */
class CalendarControls extends Component {

    constructor(props) {

        super(props);

        this.state = {
            startDate: props.startDate,
            numberOfDays: props.numberOfDays,
            countryCode: props.countryCode
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        if( name === 'numberOfDays' ) {
            value = parseInt(event.target.value);
        }
        console.log('event change: ', { [name]: value });
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if( this.props.onChange !== undefined ) {
            this.props.onChange(this.state);
        }
    }

    render() {
        return (<form onSubmit={ this.handleSubmit }>
            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input name="startDate" type="date" className="form-control"
                    onChange={ this.handleChange }
                    value={ this.state.startDate } />
            </div>
            <div className="form-group">
                <label htmlFor="numberOfDays">Number of Days</label>
                <input name="numberOfDays" type="number" className="form-control"
                    onChange={ this.handleChange }
                    value={ this.state.numberOfDays } />
            </div>
            <div className="form-group">
                <label htmlFor="countryCode">Country Code</label>
                <input name="countryCode" type="text" className="form-control"
                    value={ this.state.countryCode }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>);
    }

}

export { CalendarControls };
