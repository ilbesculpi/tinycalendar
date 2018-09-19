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

        this.starterValues = {
            startDate: props.startDate,
            numberOfDays: props.numberOfDays,
            countryCode: props.countryCode
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        if( name === 'numberOfDays' ) {
            value = parseInt(event.target.value);
        }
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event && event.preventDefault();
        if( this.props.onChange !== undefined ) {
            this.props.onChange(this.state);
        }
    }

    /**
     * Resets the component with the original values provided.
     */
    resetForm(event) {
        this.setState(this.starterValues, () => {
                this.handleSubmit();
            });
    }

    render() {
        return (<form onSubmit={ this.handleSubmit }>
            <fieldset className="form-group">
                <label htmlFor="startDate" className="bmd-label-floating">Start Date</label>
                <input name="startDate" name="startDate" type="date" className="form-control"
                    onChange={ this.handleChange }
                    value={ this.state.startDate } />
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="numberOfDays" className="bmd-label-floating">Number of Days</label>
                <input id="numberOfDays" name="numberOfDays" type="number" className="form-control"
                    onChange={ this.handleChange }
                    value={ this.state.numberOfDays || '' } />
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="countryCode" className="bmd-label-floating">Country Code</label>
                <input id="countryCode" name="countryCode" type="text" className="form-control"
                    value={ this.state.countryCode }
                    onChange={ this.handleChange } />
            </fieldset>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-raised btn-block">Submit</button>
                <button type="button" className="btn btn-raised btn-block" onClick={ this.resetForm }>Reset</button>
            </div>
        </form>);
    }

}

export { CalendarControls };
