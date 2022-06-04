import React, {Component} from "react";
export class Navbar extends Component{
   render(){
       return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'black'}}>
  <a className="navbar-brand text-white" href="\">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-white" href="\">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="\realWeather">Real Weather</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="\dashboard">Dashboard</a>
      </li>
    </ul>
  </div>
</nav>
       );
       }
}