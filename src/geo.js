// import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Geo(){
     const [weather, setWeather] = useState([]);
      const [lat, setLat] = useState([]);
      const [long, setLong] = useState([]);
      const [url, setUrl] = useState(``);
  let trip="6e6263afb84f44279f731543222510";    
const getLocation = () => {
      if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) =>{
                  let la = position.coords.latitude;
                  let lon = position.coords.longitude;
                  setLat(la)
                  setLong(lon)
                  setUrl(`http://api.weatherapi.com/v1/current.json?key=${trip}&q=${lat},${long}`)
        }) 
      }
}
const getWeater = async () =>{
      // await axios.get(url).then((response) =>{
      //       const weatherData = response.data;
      //       setWeather(weatherData);
            // console.log(weather)
      // })
      let data=await axios.get(url);
      console.log(data);
      // let rest=await data.;
      // console.log(rest);
      setWeather(data.data)
      }
useEffect(() =>{ console.log(weather) },[weather])
useEffect(() =>{
getLocation();
getWeater();
},[weather])
}

export default Geo;