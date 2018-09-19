import React, { Component } from 'react';
import * as moment from 'moment';
import { settings } from './Settings';
import './Calendar.css';

/**
 * Renders a series of weeks.
 */
class CalendarItem extends Component {

    titleFormat = 'MMM YYYY';

    /**
     * Get the Calendar Title 
     */
    getTitle() {
        // Month Title: find first valid date to display month and year info.
        const firstValidItem = this.props.items[0].find((item) => {
            return item.valid;
        });
        const firstValidDate = moment(firstValidItem.date, settings.dateFormat);
        return firstValidDate.format(this.titleFormat);
    }

    getClassName(item) {
        let name = 'date';
        name += (item.valid ? ' valid' : ' invalid');
        name += (item.weekday ? ' weekday' : ' weekend');
        return name;
    };

    render() {

        // row for week days
        const weekDays = (<tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
        </tr>);

        // row for title
        const monthTitle = (<tr>
            <th colSpan="7" className="text-center">{ this.getTitle() }</th>
        </tr>);

        // rows for actual calendar days
        const weeks = this.props.items.map((item, index) => {
            return (<tr key={ index }>
                <td className={ this.getClassName(item[0]) }>{ item[0].day }</td>
                <td className={ this.getClassName(item[1]) }>{ item[1].day }</td>
                <td className={ this.getClassName(item[2]) }>{ item[2].day }</td>
                <td className={ this.getClassName(item[3]) }>{ item[3].day }</td>
                <td className={ this.getClassName(item[4]) }>{ item[4].day }</td>
                <td className={ this.getClassName(item[5]) }>{ item[5].day }</td>
                <td className={ this.getClassName(item[6]) }>{ item[6].day }</td>
            </tr>);
        });

        return (<table className="table calendar">
            <thead>
                { weekDays }
                { monthTitle }
            </thead>
            <tbody>
                { weeks }
            </tbody>
        </table>);
    }

}

export { CalendarItem };
