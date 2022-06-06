import Form from "./form.component";
import React,{useEffect,useState,useRef} from "react"
import * as d3 from 'd3'

function Dashboard () {

  let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
  let apiOptions = "units=metric&exclude=minutely,alerts&";
  let apiKey = "appid=85585ce032692fe7cbba38dd8adf8b7c";

// Icons
let iconBaseUrl = "http://openweathermap.org/img/wn/";
let iconFormat = ".webp";

let [lat,setLon]=useState("40.74502670281777");
let [lon,setLat]=useState("-74.1636606458028");
let file = queryUrl+"lat=" + lat +"&lon=" +lon+"&" +apiOptions + apiKey;
let [main,setMain]=useState("")
let [description,setDescription]=useState("")
let [temp,setTemp]=useState("")
let [name,setName]=useState("")
let [timeNow,setTimeNow]=useState("")
let [tomorrowTemp,setTomorrowTemp]=useState("")
let [dATTemp,setDATTemp]=useState("")
let [day3,setDay3]=useState("")
let [day4,setDay4]=useState("")
let [day5,setDay5]=useState("")
let [day6,setDay6]=useState("")
let [day7,setDay7]=useState("")

const [days]=useState(['saturday','sunday','monday','tuesday','wednesday','thursday','friday']);
const [data,setData]=useState([1,2,3,4,5,6,7]);
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
setName (data.timezone);

// Time
setTimeNow ( new Date().getHours());

// Weather daily data
setTomorrowTemp(Math.round(data.daily[0].temp.day));
setDATTemp( Math.round(data.daily[1].temp.day));
setDay3( Math.round(data.daily[2].temp.day));
setDay4( Math.round(data.daily[3].temp.day));
setDay5( Math.round(data.daily[4].temp.day));
setDay6( Math.round(data.daily[5].temp.day));
setDay7( Math.round(data.daily[6].temp.day));

setData([tomorrowTemp,dATTemp,day3,day4,day5,day6,day7])

});


// const [data]=useState(dataa);

  const svgRef=useRef();
  useEffect(()=>{
      const w=400;
      const h=300;
      const svg=d3.select(svgRef.current)
      .attr('width',w)
      .attr('height',h)
      
      .style('overflow','visible')
      .style('margin-left','40%')
      .style('font-size','25px')
        const xScale=d3.scaleBand().domain(days.map((val,i)=>i))
      .range([0,w]).padding(0.5);
       const yScale=d3.scaleLinear()
       .domain([0,40])
       .range([h,0]);
 const xAxis=d3.axisBottom(xScale).ticks(days.length);
 const yAxis=d3.axisLeft(yScale).ticks(5);
 svg.append('g').call(xAxis).attr('transform',`translate(0,${h})`);
 svg.append('g').call(yAxis);
 svg.selectAll('.bar').data(data).join('rect').attr('x',(v,i)=>xScale(i)).attr('y',yScale)
 .attr('width',xScale.bandwidth()).attr('height',val=>h-yScale(val));

  },[data])
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
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
      
              <div className="card shadow-0 border border-dark border-5 text-dark" style={{borderRadius:"10px"}}>
                <div className="card-body p-4">
      
                  <div className="row text-center">
                    <div className="col-md-6 text-center border-end border-5 border-dark py-4"
                       style={{marginTop:'-1.5rem',marginBottom:'-1.5rem'}}>
                      <div className="d-flex justify-content-around mt-3">
                      {/* <Form/> */}
                      </div>
                      <div className="d-flex justify-content-around align-items-center py-5 my-4">
                        <p className="fw-bold mb-0" style={{fontSize:'7rem'}}>{temp}°</p>
                        <div className="text-start">
                          <p className="h3">Time now {timeNow}</p>
                          <p className="h3 mb-3"> {name}</p>
                          <p className="small mb-0"> {description}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-around align-items-center mb-3">
                        <div className="flex-column">
                          <i className="fas fa-minus"></i>
                        </div>
                        <div className="flex-column border" style={{borderRadius:'10px',padding:'.75rem'}}>
                          <p className="small mb-1">Tomorrow</p>
                          <p className="small mb-0"><strong>{tomorrowTemp} °</strong></p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">2nd day</p>
                          <p className="small mb-0"><strong>{dATTemp} °</strong></p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">3rd day</p>
                          <p className="small mb-0"><strong>{day3} °</strong></p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">4th day</p>
                          <p className="small mb-0"><strong>{day4} °</strong></p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">5th day</p>
                          <p className="small mb-0"><strong>{day5} °</strong></p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">6th day</p>
                          <p className="small mb-0"><strong>{day6} °</strong></p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">7th day</p>
                          <p className="small mb-0"><strong>{day7} °</strong></p>
                        </div>
                        <div className="flex-column">
                          <i className="fas fa-minus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 text-end">
                      <p className="small mt-3 mb-5 pb-5">For a week</p>
                      <svg className="text-start m-3" ref={svgRef} ></svg>
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

export default Dashboard;

