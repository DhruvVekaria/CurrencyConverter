import React, { useState } from "react";
//import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = ({DataFromAPI}) => {
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());
 let url = "https://api.exchangerate.host/timeseries?"

 let startDateFormat = new Date(String(startDate));
 let finalStartDate = `${startDateFormat.getFullYear()}-${((startDateFormat.getMonth() + 1) < 10 ? '0' : '')+(startDateFormat.getMonth() + 1)}-${(startDateFormat.getDate() < 10 ? '0' : '')
                        + startDateFormat.getDate()}`;

 let endDateFormat = new Date(String(endDate));
 let finalEndDate = `${endDateFormat.getFullYear()}-${((endDateFormat.getMonth() + 1) < 10 ? '0' : '')+(endDateFormat.getMonth() + 1)}-${(endDateFormat.getDate() < 10 ? '0' : '')
                                               + endDateFormat.getDate()}`;

  let fullURL = url.concat("start_date=", finalStartDate, "&end_date=", finalEndDate, "&base=USD&symbols=EUR")


  const handleSubmit = (e) => {
    e.preventDefault()
    
    // ... submit to API or something
    var request = new XMLHttpRequest()
    request.open('GET',fullURL)
    request.responseType = 'json';
    request.send();
    
    request.onload = async function() {
      var response = await request.response;
      DataFromAPI(response);}
    };

 return (
   <div>
     <Grid container spacing={3}>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Grid item xs={6} align = 'right'>
           <KeyboardDatePicker 
           disableToolbar
           variant="inline"
           format="MM/dd/yyyy"
           margin="normal"
           //id="start-date"
           label="Start Date"
           value={startDate}
           onChange={setStartDate}
           KeyboardButtonProps={{
             'aria-label': 'change date',}}
          />
        </Grid>
        <Grid item xs={6} align = 'left'>
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          //id="start-date"
          label="End Date"
          value={endDate}
          onChange={setEndDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',}}
          />
        </Grid>
        <Grid align = "center" item xs={12} >
          <button onClick={handleSubmit}>Submit</button>
        </Grid>
        </MuiPickersUtilsProvider>
     </Grid>
   </div>


 );
}

export default DatePicker