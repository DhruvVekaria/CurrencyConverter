import React, { useState} from "react";
import  DatePicker from 'D:/Hedado/currency_exchange/src/components/DatePicker.js';
import { Line } from "react-chartjs-2";
import Container from '@material-ui/core/Container';

function Homepage(){
    const [data, setData] = useState(new Response());
    const [chartData, setChartData] = useState({});
  
    const DataFromAPI = (data) => {
     setData(data);
     const chart = () => {
       let daysData = [];
       let currencyRateData = [];
       for (var day in data.rates) {
         daysData.push(day)
         currencyRateData.push(data.rates[day].EUR);
       }
           setChartData({
             labels: daysData,
             datasets: [
               {
                 data: currencyRateData,
                 borderWidth: 4,
                 labels: "USD to EUR"
               }
             ]
           });
     console.log(daysData, currencyRateData);
     };
     chart();
    };
    const options={
    responsive: true,
    plugins:{
      title: {display: true, text: "USD to EUR Chart"},},
      scales: {
        y: [
          {
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Month'
            },
          }
        ],
        x: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Month'
            },
            gridLines: {
              display: false
            }
          }
        ]
      }
    };
    return(
        <>
        <DatePicker DataFromAPI = {DataFromAPI} />
        <Container maxWidth = 'md'>
        <Line data={chartData} options={options}/>
        </Container>
        </>
    )
}
export default Homepage;