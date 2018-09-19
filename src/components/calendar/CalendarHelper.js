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

    /**
     * Arranges the dates returned from `getWeeksFromDate` to display in a Calendar.
     * Invalid dates are hidden. Invalid dates are defined as:
     * - any days in the week previous to the start date
     * - any days in the week after the end date
     * - any days before the first day of the month
     * - any days after the end of the month
     * @param {*} dates 
     */
    prepareDatesForRender(dates) {

        const results = [];
        const startDate = moment(dates.startDate, this.dateFormat);
        const endDate = moment(dates.endDate, this.dateFormat);
        
        let currentMonth = startDate.get('month');
        let counter = 0;

        // iterate dates on each week
        dates.weeks.forEach((weekItem) => {

            let week = this.buildWeekEntry(weekItem, startDate, endDate);

            if( !results[counter] ) {
                results[counter] = [];
            }

            // check for month changes
            week.forEach((item, index) => {

                const currentDate = moment(item.date, this.dateFormat);

                if( !item.valid ) {
                    // skip month change verification
                    return;
                }

                if( currentDate.get('month') !== currentMonth ) {

                    // invalidate current week from here...
                    for( let x = index; x < 7; x++ ) {
                        week[x].valid = false;
                    }

                    // update counters
                    results[counter].push(week);
                    counter += 1;
                    results[counter] = [];

                    // update currentMonth
                    currentMonth = currentDate.get('month');
                    
                    // clone week and invalidate first days
                    week = this.buildWeekEntry(weekItem, startDate, endDate);
                    for( let x = 0; x < index; x++ ) {
                        week[x].valid = false;
                    }

                    // stop iterator
                    return;
                }
            });

            results[counter].push(week);
        });

        return results;
    }

    buildWeekEntry(item, startDate, endDate) {

        const week = [];

        item.days.forEach((day) => {

            const currentDate = moment(day, this.dateFormat);

            week.push({
                date: day,
                day: currentDate.get('date'),
                valid: true,
                weekday: currentDate.isoWeekday() < 6,   // 6: Sat, 7: Sun
                weekend: currentDate.isoWeekday() > 5
            });

        });

        // check for invalid days
        week.forEach((item, index) => {
            const currentDate = moment(item.date, this.dateFormat);
            if( currentDate.isBefore(startDate) || currentDate.isAfter(endDate) ) {
                item.valid = false;
            }
        });

        return week;
    }

}

export { CalendarHelper };
