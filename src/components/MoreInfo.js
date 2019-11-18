import React, { Component } from 'react';
export default class MoreInfo extends Component{
	render()
	{
		return(

	 <div className="productlist">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
           <div className="col-md-7">
                <div className="graphic">
                    <img src="img/about.svg" alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="col-md-5">
              <h1 className="hero-title">
                  About Us
                </h1>
                <p>
                  Xiaomi was founded in 2010 by serial entrepreneur Lei Jun based on the vision “innovation for everyone”. We believe that high-quality products built with cutting-edge technology should be made accessible to everyone. We create remarkable hardware, software, and Internet services for and with the help of our Mi fans.
                </p>
            </div>
           
          </div>
        </div>
      </div>  
			)
	}
}