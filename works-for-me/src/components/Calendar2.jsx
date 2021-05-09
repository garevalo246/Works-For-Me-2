import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import {Paper,createMuiTheme, Typography} from '@material-ui/core'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

import '@fullcalendar/bootstrap/main.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import '../../node_modules/@fullcalendar/bootstrap/main.css'; // our app's CSS
import useStyles from './styles'
// import createEvent from './create-event.component'

export default function(){
    
    
    // const classes = useStyles();
    // const theme = createMuiTheme({
        //     spacing: 2,
        // })
        
        // theme.spacing(3)
        
   
    return (
        <section>
            <Paper  variant = "outlined" square = {false} >
                <Typography variant = "h6" >Today's events</Typography>
                   
                    <FullCalendar  
                        
                        plugins = {[ timeGridPlugin, googleCalendarPlugin, listPlugin, bootstrapPlugin]}
                        // themeSystem = "bootstrap"
                        initialView = "listDay"
                        aspectRatio = "1.55"
                        
                        windowResizeDelay = "200"
                        eventBackgroundColor  = "purple"
                        eventBorderColor = "purple"
                        selectable = {true}
                        editable = {true}
                        unselectAuto = {true}
                        weekends = {true}         
                        navLinks ={true}                    
                
                        googleCalendarApiKey= 'AIzaSyA7ILoMzctHVI16y1LWaTPUKlMp1sWcT_Q'
                        events={ {
                            googleCalendarId: 'giovanniarevalo246@gmail.com',    
                        }}   

                    />

            </Paper>
              
        </section>
    )
}