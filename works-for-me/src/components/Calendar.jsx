import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import {Paper,createMuiTheme, Card,Typography} from '@material-ui/core'
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

    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState({events: []})
    const calendarRef = useRef(null);
    
    const onEventAdded = event=>{
        // console.log(loopData);
        //save to database
        axios.post('http://localhost:5000/event/add', event)
        .then(res => console.log(res.data));

        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent(event);
    } 

    const getData = componentDidMount => {
        axios.get('http://localhost:5000/event/')
        .then(response => {
          setEvents({ events: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    const loopData = eventsList=>{
        return setEvents.events.map(element => {
            return element;
        });
    }
    
   
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-10">
                        <Paper variant = "outlined"  className = {classes.paper}>
                            <div style={{position:"relative", zIndex:0}}>
                                <FullCalendar className = {classes.FullCalendar}
                                    ref ={calendarRef}
                                    plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin,bootstrapPlugin, listPlugin]}
                                    themeSystem = "bootstrap"
                                    aspectRatio = "1.60"
                                    headerToolbar={{
                                        left: "prev,next today",
                                        center: "title",
                                        right: "dayGridMonth timeGridWeek listDay",
                                    }}
                                    
                                    windowResizeDelay = "200"
                                    eventBackgroundColor  = "purple"
                                    eventBorderColor = "purple"
                                    background-color = "#24467d"
                                    
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
                                        [
                                            {
                                                title: 'Event1',
                                                start: '2021-05-05',
                                                end: '2021-05-05'
                                            },
                                            {
                                                title: 'Event2',
                                                start: '2021-05-05',
                                                end: '2021-05-05'
                                            }
                                        ]
                                      ]} 

                                />
                            </div>
                        </Paper>      
                    </div>
                    <div class="col-2">
                        <AddEventModal
                            onEventAdded={event => onEventAdded(event)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}