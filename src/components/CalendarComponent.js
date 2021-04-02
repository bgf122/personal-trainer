import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AppBarComponent from './AppBarComponent';

export default function CalendarComponent() {
    const localizer = momentLocalizer(moment);

    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(res => res.json())
        .then(data => setTrainings(data.content));
    }
 
    useEffect(fetchData, []);

    return (
        <div>
            <AppBarComponent/>
            <Calendar
                style={{ height: 800 }}
                localizer={localizer}
                events={trainings}
                titleAccessor="activity"
                startAccessor={(a) => new Date(a.date)}
                endAccessor={(a) => new Date(Date.parse(a.date)+a.duration*60000)}
                defaultDate={moment().toDate()}
                step={60}>
            </Calendar>
        </div>
    )
}