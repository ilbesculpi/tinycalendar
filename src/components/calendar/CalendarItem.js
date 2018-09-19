import React, { Component } from 'react';
import './Calendar.css';

/**
 * Renders a series of weeks.
 */
class CalendarItem extends Component {

    render() {

        const weekDays = (<tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
        </tr>);

        const monthTitle = (<tr>
            <th colSpan="7" className="text-center">November</th>
        </tr>);

        const weeks = this.props.items.map((item, index) => {
            return (<tr key={ index }>
                <td>{ item[0].day }</td>
                <td>{ item[1].day }</td>
                <td>{ item[2].day }</td>
                <td>{ item[3].day }</td>
                <td>{ item[4].day }</td>
                <td>{ item[5].day }</td>
                <td>{ item[6].day }</td>
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
