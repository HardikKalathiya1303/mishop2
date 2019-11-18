import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component{
	render()
	{
		return(
			<ProductConsumer>
			{(value) =>{
				const {modalOpen,closeModal} = value;
				const {img, title, price} = value.modalProduct;
				if(!modalOpen)
				{
					return null;
				}
				else{
					return(
					 <div className="ModalContainer">	
						<div className="container">
							<div className="row">
								<div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
									<h5>Item Add To Cart</h5>
									<img src={img} alt="product" className="img-fluid" />
									<h5>{title}</h5>
									<h5 className="text-muted">price : $ {price}</h5>
									<Link to='/'>
										<button onClick={()=>closeModal()} className="modal-back">
											Store
										</button>
									</Link>
									<Link to='/cart'>
										<button onClick={()=>closeModal()} className="modal-back">
										 Go To Cart
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>	
					);
				}
			}}
			</ProductConsumer>
			);
	}
}