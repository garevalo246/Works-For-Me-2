import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';


// import createEvent from './create-event.component'

export default function(){
    
    const calendarRef = useRef(null);

    const onEventAdded = event=>{
        console.log("hello");
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.addEvent(event);
    }

    return (
        <section>
            <FullCalendar
                ref ={calendarRef}
                plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin, bootstrapPlugin]}
                themeSystem = "bootstrap"
                initialView = "dayGridMonth"
                aspectRatio = "1.5"
                headerToolbar={{
                    right: "prev,next today",
                    center: "title",
                    left: "dayGridMonth timeGridWeek timeGridDay",
                 }}
                windowResizeDelay = "200"
                eventBackgroundColor  = "purple"
                eventBorderColor = "purple"
                defaultView = "dayGridMonth"
                selectable = {true}
                editable = {true}
                unselectAuto = {true}
                weekends = {true}

                googleCalendarApiKey= 'AIzaSyA7ILoMzctHVI16y1LWaTPUKlMp1sWcT_Q'
                events={ {
                    googleCalendarId: 'giovanniarevalo246@gmail.com',    
                }}   

                />
                {/* <createEvent onEventAdded={event => onEventAdded(event)}/> */}

        </section>
    )
}