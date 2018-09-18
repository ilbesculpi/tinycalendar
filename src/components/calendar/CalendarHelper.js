import * as moment from 'moment';

/**
 * Utility class to handle the logic for generating the calendar dates.
 * This class is intended for usage within the Calendar components, 
 * should not be exported nor exposed to other classes.
 */
class CalendarHelper {

    /**
     * Gets the dates that span between the start date and the number of days.
     * Return the info in weeks.
     * @param { string } date in format YYYY-MM-DD
     * @param {*} numberOfDays 
     */
    getCalendarDates(date, numberOfDays) {

        const startDate = moment(date, 'YYYY-MM-DD');
        if( !date || !startDate ) {
            throw new Error("Must provide a valid date");
        }

        if( isNaN(parseInt(numberOfDays)) || numberOfDays < 1 ) {
            throw new Error("Invalid value provided for 'numberOfDays'");
        }
        numberOfDays = parseInt(numberOfDays);

        // calculate last day that should be generated
        const endDate = startDate.clone().add(numberOfDays - 1, 'days');

        return {
            startDate: startDate.format('YYYY-MM-DD'),
            endDate: endDate.format('YYYY-MM-DD'),
            numberOfDays: numberOfDays,
            weeks: []
        };

    }

}

export { CalendarHelper };
