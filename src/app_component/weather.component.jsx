import React from "react";
import "./weather.style.css";

const Weather = (props) => {
  return (
    <div className="container py-5 h-120">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-10 col-lg-8 col-xl-6">
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "40px" }}
          >
            <div className="bg-image" style={{ borderRadius: "35px" }}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                className="card-img"
                />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
              ></div>
            </div>
            <div className="card-img-overlay text-dark p-2">
              <h1 className="text-white">{props.cityname}</h1>
              <h5 className="py-4">
                <i className={`wi ${props.weatherIcon} display-1`} />
              </h5>

              {/* Get Celsius */}
              {props.temp_celsius ? (
                <h1 className="py-2">{props.temp_celsius}&deg;</h1>
              ) : null}

              {/* show max and min temp */}
              {maxminTemp(props.temp_min, props.temp_max)}

              {/* Weather description */}
              <h4 className="py-3">
                {props.description.charAt(0).toUpperCase() +
                  props.description.slice(1)}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container text-light">
    //   <div className="Card">
    //     <h1 className="text-white py-3">{props.cityname}</h1>
    //     <h5 className="py-4">
    //       <i className={`wi ${props.weatherIcon} display-1`} />
    //     </h5>

    //     {/* Get Celsius */}
    //     {props.temp_celsius ? (
    //       <h1 className="py-2">{props.temp_celsius}&deg;</h1>
    //     ) : null}

    //     {/* show max and min temp */}
    //     {maxminTemp(props.temp_min, props.temp_max)}

    //     {/* Weather description */}
    //     <h4 className="py-3">
    //       {props.description.charAt(0).toUpperCase() +
    //         props.description.slice(1)}
    //     </h4>
    //   </div>
    // </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
