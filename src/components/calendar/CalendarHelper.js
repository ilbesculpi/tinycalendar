import * as moment from 'moment';
import { settings } from './Settings';

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

        const startDate = moment(date, settings.dateFormat);
        if( !date || !startDate ) {
            throw new Error("Must provide a valid date");
        }

        if( isNaN(parseInt(numberOfDays)) || numberOfDays < 1 ) {
            throw new Error("Invalid value provided for 'numberOfDays'");
        }
        numberOfDays = parseInt(numberOfDays);

        // calculate last day that should be generated
        const endDate = startDate.clone().add(numberOfDays - 1, 'days');

        // generate days
        const currentDate = startDate.clone();

        const getWeekDays = (date) => {
            const weekStart = date.clone().startOf('week');
            return [
                weekStart.format(settings.dateFormat),
                weekStart.add(1, 'days').format(settings.dateFormat),
                weekStart.add(1, 'days').format(settings.dateFormat),
                weekStart.add(1, 'days').format(settings.dateFormat),
                weekStart.add(1, 'days').format(settings.dateFormat),
                weekStart.add(1, 'days').format(settings.dateFormat),
                weekStart.add(1, 'days').format(settings.dateFormat)
            ];
        };

        const weeks = [];
        while( currentDate.startOf('week').isSameOrBefore(endDate) ) {
            const details = { 
                week: currentDate.get('week'),
                days: getWeekDays(currentDate)
            };
            weeks.push(details);
            currentDate.add(1, 'week');
        }

        return {
            startDate: startDate.format(settings.dateFormat),
            endDate: endDate.format(settings.dateFormat),
            numberOfDays: numberOfDays,
            weeks: weeks
        };

    }

}

export { CalendarHelper };
