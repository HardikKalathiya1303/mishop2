import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../mi.png';


export default class Footer extends Component{
  render(){
  	 return(
  	 		<div className="navbar navbar-expand-sm navbar-dark px-sm-5">
  	 			<Link to="/">
					<img src={logo} className="navbar-brand" alt="store" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<h5>Contact : <strong>9157434949</strong></h5>
					</li>
				</ul>
				<div className="ml-auto foot">
						<h5>Design & Develop By : DR Maniya</h5>
				</div>
  	 		</div>
  	 	)
  }
}