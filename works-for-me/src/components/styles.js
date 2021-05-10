import { makeStyles } from '@material-ui/core/styles';
import "./Calendar.css"

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor:"white"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: -5
  },
  buttonSubmit: {
    marginBottom: 5,
    marginTop: 5
  },
  FullCalendar: {
    margin: '0 auto',
    maxWidth: '900px',
  },


  
}));