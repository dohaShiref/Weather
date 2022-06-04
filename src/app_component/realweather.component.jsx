import React, { useState,useEffect } from "react";
import "./weather.style.css";

export function RealWeather() {
// API call
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=9d3b5e80112cb227f9a7275cdb019508";

// Icons
let iconBaseUrl = "http://openweathermap.org/img/wn/";
let iconFormat = ".webp";

let [lat,setLon]=useState("40.74502670281777");
let [lon,setLat]=useState("-74.1636606458028");
let file = queryUrl+"lat=" + lat +"&lon=" +lon+"&" +apiOptions + apiKey;
let [backgroundWrap,setBackgroundWrap]=useState("");
let [main,setMain]=useState("")
let [description,setDescription]=useState("")
let [temp,setTemp]=useState("")
let [pressure,setPressure]=useState("")
let [name,setName]=useState("")
let [humidity,setHumidity]=useState("")
let [hourNow,setHourNow]=useState("")
let [hour1,setHour1]=useState("")
let [hour2,setHour2]=useState("")
let [hour3,setHour3]=useState("")
let [hour4,setHour4]=useState("")
let [hour5,setHour5]=useState("")
let [timeNow,setTimeNow]=useState("")
let [tomorrowTemp,setTomorrowTemp]=useState("")
let [dATTemp,setDATTemp]=useState("")
let [tomorrowMain,setTomorrowMain]=useState("")
let [dATTempMain,setDATTempMain]=useState("")
let [iconCodeToday,setIconCodeToday]=useState("")
let [iconCodeTomorrow,setIconCodeTomorrow]=useState("")
let [iconCodeDAT,setIconCodeDAT]=useState("")
let [iconHourNow,setIconHourNow]=useState("")

let time1 = timeNow + 1;
let time2 = time1 + 1;
let time3 = time2 + 1;
let time4 = time3 + 1;
let time5 = time4 + 1;

let iconHour1,iconHour2,iconHour3,iconHour4,iconHour5

let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;

   useEffect(()=>{
    fetchWeathetOfMyLocation();
      },[])
    
fetch(file)
.then((response) => response.json())
.then((data) => {
// Weather main data
console.log(data)
setMain( data.current.weather[0].main);
setDescription( data.current.weather[0].description);
setTemp( Math.round(data.current.temp));
setPressure( data.current.pressure);
setHumidity( data.current.humidity);
setName (data.timezone);

// Weather hourly data
setHourNow( data.hourly[0].temp);
setHour1( data.hourly[1].temp);
setHour2( data.hourly[2].temp);
setHour3( data.hourly[3].temp);
setHour4( data.hourly[4].temp);
setHour5( data.hourly[5].temp);


// Time
setTimeNow ( new Date().getHours());

// Weather daily data
setTomorrowTemp(Math.round(data.daily[0].temp.day));
setDATTemp( Math.round(data.daily[1].temp.day));
setTomorrowMain(data.daily[0].weather[0].main);
setDATTempMain( data.daily[1].weather[0].main);

// Today
setIconCodeToday( data.current.weather[0].icon);
// iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;

// Tomorrow
setIconCodeTomorrow ( data.daily[0].weather[0].icon);
// iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;

// Day after tomorrow
setIconCodeDAT( data.daily[1].weather[0].icon);
// iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;

// Icons hourly

// Hour now
setIconHourNow(data.hourly[0].weather[0].icon);
// iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;

// Hour1
iconHour1 = data.hourly[1].weather[0].icon;
// iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;

// Hour2
iconHour2 = data.hourly[2].weather[0].icon;
// iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;

// Hour3
iconHour3 = data.hourly[3].weather[0].icon;
// iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;

// Hour4
iconHour4 = data.hourly[4].weather[0].icon;
// iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;

// Hour5
iconHour5 = data.hourly[5].weather[0].icon;
// iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;

// Backgrounds

switch (main) {
case "Snow":
 setBackgroundWrap('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif');
break;
case "Clouds":
 setBackgroundWrap('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif');
break;
case "Fog":
setBackgroundWrap('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif');
break;
case "Rain":
setBackgroundWrap('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif');
break;
case "Clear":
setBackgroundWrap('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif');
break;
case "Thunderstorm":
setBackgroundWrap('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif');
break;
default:
setBackgroundWrap('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif');
break;
}
});
console.log(iconFullyUrlHour1)
const myLocation  = (position) => {
       setLat(position.coords.latitude);
       setLon(position.coords.longitude);
    
      }
      const fetchWeathetOfMyLocation= async ()=>{
          try{
             await window.navigator.geolocation.getCurrentPosition(myLocation);
          }
          catch(err){
            console.log(err);
          }
        }
  return (
    <section className="vh-100">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div
              id="wrapper-bg"
              className="card text-white bg-image shadow-4-strong"
              style={{backgroundImage:"url(" + backgroundWrap + ")"}}
            >
              {/* <!-- Main current data --> */}
              <div className="card-header p-4 border-0">
                <div className="text-center mb-3">
                  <p className="h2 mb-1" id="wrapper-name">
                    {name}
                  </p>
                  <p className="mb-1" id="wrapper-description">
                    {description}
                  </p>
                  <p className="display-1 mb-1" id="wrapper-temp">
                    {temp} °C
                  </p>
                  <span className="">
                    Pressure: <span id="wrapper-pressure">{pressure}</span>
                  </span>
                  <span className="mx-2">|</span>
                  <span className="">
                    Humidity: <span id="wrapper-humidity">{humidity} °C</span>
                  </span>
                </div>
              </div>

              {/* <!-- Hourly forecast --> */}
              <div className="card-body p-4 border-top border-bottom mb-2">
                <div className="row text-center">
                  <div className="col-2">
                    <strong className="d-block mb-2">Now</strong>
                    <img
                      id="wrapper-icon-hour-now"
                      src="{iconFullyUrlHourNow}"
                      className=""
                      alt=""
                    />
                    <strong className="d-block" id="wrapper-hour-now">
                      {hourNow} °
                    </strong>
                  </div>

                  <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time1">
                      {time1}
                    </strong>
                    <img
                      id="wrapper-icon-hour1"
                      src="{iconFullyUrlHour1}"
                      className=""
                      alt=""
                    />
                    <strong className="d-block" id="wrapper-hour1">
                      {hour1} °
                    </strong>
                  </div>

                  <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time2">
                      {time2} 
                    </strong>
                    <img
                      id="wrapper-icon-hour2"
                      src="{iconFullyUrlHour2}"
                      className=""
                      alt=""
                    />
                    <strong className="d-block" id="wrapper-hour2">
                      {hour2} °
                    </strong>
                  </div>

                  <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time3">
                      {time3}
                    </strong>
                    <img
                      id="wrapper-icon-hour3"
                      src="{iconFullyUrlHour3}"
                      className=""
                      alt=""
                    />
                    <strong className="d-block" id="wrapper-hour3">
                      {hour3} °
                    </strong>
                  </div>

                  <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time4">
                      {time4}
                    </strong>
                    <img
                      id="wrapper-icon-hour4"
                      src={iconFullyUrlHour4}
                      className=""
                      alt=""
                    />
                    <strong className="d-block" id="wrapper-hour4">
                      {hour4} °
                    </strong>
                  </div>

                  <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time5">
                      {time5}
                    </strong>
                    <img
                      id="wrapper-icon-hour5"
                      src={iconFullyUrlHour5}
                      className=""
                      alt=""
                    />
                    <strong className="d-block" id="wrapper-hour5">
                      {hour5} °
                    </strong>
                  </div>
                </div>
              </div>

              {/* <!-- Daily forecast --> */}
              <div className="card-body px-5">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <strong>Today</strong>
                  </div>

                  <div className="col-lg-2 text-center">
                    <img
                      id="wrapper-icon-today"
                      src="{iconFullyUrlToday}"
                      className="w-100"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-4 text-end">
                    <span id="wrapper-forecast-temp-today">{temp} ° {dATTemp}</span>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <strong>Tomorrow</strong>
                  </div>

                  <div className="col-lg-2 text-center">
                    <img
                      id="wrapper-icon-tomorrow"
                      src="{iconFullyUrlTomorrow}"
                      className="w-100"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-4 text-end">
                    <span id="wrapper-forecast-temp-tomorrow">
                      {tomorrowTemp} ° {tomorrowMain}
                    </span>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <strong>Day after tomorrow</strong>
                  </div>

                  <div className="col-lg-2 text-center">
                    <img
                      id="wrapper-icon-dAT"
                      src="{iconFullyUrlDAT}"
                      className="w-100"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-4 text-end">
                    <span id="wrapper-forecast-temp-dAT">{dATTemp} ° {dATTempMain}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
