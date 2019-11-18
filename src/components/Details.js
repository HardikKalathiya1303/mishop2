import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Details extends Component
{
	render()
	{
		return(
			<ProductConsumer>
				{value => {
				const {id, img, info, price, title, inCart} = value.detailProduct;
				return(
					<div className="container  py-5">
						<div className="row">
							<div className="col-10 mx-auto text-center text-black text-slanted my-5">
								<h1>{title}</h1>
							</div>
						</div>


						<div className="row">
							<div className="col-10 mx-auto col-md-6 my-3">
								<img src={img} alt="product" className="img-fluid" />
							</div>
							<div className="col-10 mx-auto col-md-6 my-3">
								<h2>Model : {title}</h2>
								{/*<h4 className="text-title text-muted mt-3 mb-2">
								Made By : <span>{company}</span>
								</h4>*/}
								<h4>
									<strong>Price : <span>$ </span>{price}</strong>
								</h4>
								<p className="font-weight-bold mt-3 mb-0">
									SOME INFO ABOUT PRODUCT:
								</p>
								<p className="text-muted lead">{info}</p>
								<div>
									<Link to='/'>
										<button className="back-pro">
											Back To Product
										</button>
										<button className="back-pro" cart disabled={inCart?true:false}
										 onClick={()=>{
										 	value.addToCart(id);
										 	value.openModal(id);
										 }}>
											{inCart ? "inCart" : "Add To Cart"}
										</button>
									</Link>
								</div>


							</div>
						</div>



					</div>
					)
				}}
			</ProductConsumer>
		)
	}

}

export default Details;