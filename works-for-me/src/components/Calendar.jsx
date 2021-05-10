import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import {Paper,createMuiTheme} from '@material-ui/core'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

import '@fullcalendar/bootstrap/main.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import '../../node_modules/@fullcalendar/bootstrap/main.css'; // our app's CSS
import useStyles from './styles'
import axios from 'axios';


import AddEventModal from "./AddEventModal";

export default function(){
    
  
    const classes = useStyles();
    const theme = createMuiTheme({
        spacing: 2,
    })
    
    theme.spacing(3)

    const calendarRef = useRef(null);
    
    const onEventAdded = event=>{
        //save to database
        axios.post('http://localhost:5000/event/add', event)
        .then(res => console.log(res.data));

        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent(event);
    } 
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/event/').then(response => {

            const requiredDataFromResponse = response.data;
            const data = requiredDataFromResponse.map(event => ({
                start: event.start,
                end: event.end,
                title: event.title
                
            }));

            setEvents(data);
        })
            .catch(error => { setEvents([]); })
    }, []);
    
   
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    {/* calendar */}
                    <div class="col-9">
                        <Paper variant = "outlined"  className = {classes.paper}>
                            <div style={{position:"relative", zIndex:0}}>
                                <FullCalendar className = {classes.FullCalendar}
                                    ref ={calendarRef}
                                    plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin,bootstrapPlugin, listPlugin]}
                                    themeSystem = "bootstrap"
                                    aspectRatio = "1.50"
                                    headerToolbar={{
                                        left: "dayGridMonth timeGridWeek listDay",
                                        center: "title",
                                        right: "prev,next today",
                                    }}
                                    
                                    windowResizeDelay = "200"
                                    eventBackgroundColor  = "#cc3300"
                                    //#cc3300
                                    //#006699

                                    eventBorderColor = "#cc3300"
                                    background-color = "#cc3300"
                                    
                                    selectable = {true}
                                    editable = {true}
                                    unselectAuto = {true}
                                    weekends = {true}         
                                    navLinks ={true}
                                
                            
                                    googleCalendarApiKey= 'AIzaSyA7ILoMzctHVI16y1LWaTPUKlMp1sWcT_Q'
                                    eventSources= {[
                                        {
                                            googleCalendarId: 'giovanniarevalo246@gmail.com',  
                                        },
                                        events
                                      ]} 

                                />
                            </div>
                        </Paper>      
                    </div>
                    {/* add event */}
                    <div class="col-3">
                        <AddEventModal
                            onEventAdded={event => onEventAdded(event)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}