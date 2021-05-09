import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import {Paper,createMuiTheme, Card} from '@material-ui/core'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

import '@fullcalendar/bootstrap/main.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import '../../node_modules/@fullcalendar/bootstrap/main.css'; // our app's CSS
import useStyles from './styles'
// import createEvent from './create-event.component'


import AddEventModal from "./AddEventModal";
export default function(){
    
  
    const classes = useStyles();
    const theme = createMuiTheme({
        spacing: 2,
    })

    theme.spacing(3)

    const [modalOpen, setModalOpen] = useState(false);
    const calendarRef = useRef(null);
    
    const onEventAdded = event=>{
        console.log("added!!!!!!!!!!!");
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.addEvent(event);
    } 

    
   
    return (
        
        <Paper variant = "outlined" >
            <button onClick={()=> setModalOpen(true)}>Add Event</button>
            <div style={{position:"relative", zIndex:0}}>
                <FullCalendar className = {classes.FullCalendar}
                    ref ={calendarRef}
                    plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin,bootstrapPlugin, listPlugin]}
                    themeSystem = "bootstrap"
                    // initialView = "dayGridMonth"
                    aspectRatio = "1.55"
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth timeGridWeek listDay",
                    }}
                    
                    windowResizeDelay = "200"
                    eventBackgroundColor  = "purple"
                    eventBorderColor = "purple"
                    background-color = "#24467d"
                    
                    // weekNumbers = {true}
                    
                    selectable = {true}
                    editable = {true}
                    unselectAuto = {true}
                    weekends = {true}         
                    // navLinks ={true}
                
            
                    googleCalendarApiKey= 'AIzaSyA7ILoMzctHVI16y1LWaTPUKlMp1sWcT_Q'
                    events={ {
                        googleCalendarId: 'giovanniarevalo246@gmail.com',    
                    
                    }}   

                />
            </div>
            
                  {/* <AddEventModal 
                    isOpen={modalOpen} 
                    onClose={() => setModalOpen(false)}
                    onEventAdded={event => onEventAdded(event)}
                /> */}
        </Paper>
              
           

    )
}