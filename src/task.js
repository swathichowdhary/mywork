import { useState } from 'react';
import axios from 'axios';
import './task.css';
// import { useEffect } from 'react';
import Geo from './geo.js';
import Apps from './fre.js';
function App() {
let [data,setData]=useState({
    name:'London',
    celcious:20,
    humidity:30,
    weatherdescription:'fewclouds',
    date1:'2023-11-03  06:00:00',
    date2:'2023-11-03  06:00:00',
    date3:'2023-11-03  06:00:00',
    maxtemp1:291.44,
    mintemp1:234.98,
    maxtemp2:291.44,
    mintemp2:234.98,
    maxtemp3:291.44,
    mintemp3:234.98,
    weathericon1:'10d',
    weathericon2:'10d',
    weathericon3:'10d',
    })
let [name,setName]=useState('');
const handleclick=()=>{
        if(name!==""){
    const apiurl=`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=5f8a9758eabf64b607c2814132a658e1`
     axios.get(apiurl)
     .then(res=>{console.log(res.data);
        setData({...data, name:res.data.city.name, celcious:res.data.list[0].main.temp, humidity:res.data.list[0].main.humidity, weatherdescription:res.data.list[0].weather[0].description, date1:res.data.list[1].dt_txt, date2:res.data.list[2].dt_txt, date3:res.data.list[10].dt_txt, maxtemp1:res.data.list[1].main.temp_max, mintemp1:res.data.list[1].main.temp_min, maxtemp2:res.data.list[2].main.temp_max, mintemp2:res.data.list[2].main.temp_min, maxtemp3:res.data.list[10].main.temp_max, mintemp3:res.data.list[10].main.temp_min, weathericon1:res.data.list[1].weather[0].icon,  weathericon2:res.data.list[2].weather[0].icon,  weathericon3:res.data.list[10].weather[0].icon })
     })
         .catch(err=> console.log(err));
        }
    }
          return(
<>
   <div className='weatherapp'>
      <Geo/>
      <h1 id='wed'>Weather Dashboard</h1>
      <div className='container'>
         <input type="text" placeholder="search city" onChange={e=>setName(e.target.value)} >
         </input>
         <button style={{background:'blue', color:'white'}}  onClick={handleclick}>Search</button>
      </div>
      <Apps/>
      <div className='weatherdata'>
          <div className='currentweather'>
             <div className='details'>
                 <h2>Cityname:{data.name}</h2>
                 <h4>Temperaure:{data.celcious}°c</h4>
                 <h4>Humidity:{data.humidity}%</h4>
                 <h4>Weather Description:{data.weatherdescription}</h4>
             </div>
               <div className='icon'>
                 <img src='https://openweathermap.org/img/wn/10d@4x.png' alt='weather icon'></img>
               </div>
            </div>
           <div>
               <h2>3-Day Forecast</h2>
               <ul className='weathercards'>
                  <li className='card'>
                     <h2>City Name:{data.name}</h2>
                     <h4>Date:{data.date1}</h4>
                     <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='weather icon'></img>
                     <h4>Weather Icon:{data.weathericon1}</h4>
                     <h4>Max Temp:{data.maxtemp1}</h4>
                     <h4>Min Temp:{data.mintemp1}</h4>
                   </li>
                  <li className='card'>
                     <h2>City Name:{data.name}</h2> 
                     <h4>Date:{data.date2}</h4>
                     <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='weather icon'></img>
                     <h4>Weather Icon:{data.weathericon2}</h4>
                     <h4>Max Temp:{data.maxtemp2}</h4>
                     <h4>Min Temp:{data.mintemp2}</h4>
                  </li>
                 <li className='card'>
                     <h2>City Name:{data.name}</h2>
                     <h4>Date:{data.date3}</h4>
                     <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='weather icon'></img>
                     <h4>Weather Icon:{data.weathericon3}</h4>
                     <h4>Max Temp:{data.maxtemp3}</h4>
                     <h4>Min Temp:{data.mintemp3}</h4>
                 </li>
               </ul>
           </div>
      </div>
 </div>
</>
)
    }   
export default App;