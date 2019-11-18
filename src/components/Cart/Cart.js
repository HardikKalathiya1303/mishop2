import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
class Cart extends Component
{
	render()
	{
		return(
			<section>
			<ProductConsumer>
			 {value => {
			 	const { cart } = value;
			 	if(cart.length > 0)
			 	{
			 		return(
			 		<React.Fragment>
			 		<h2 className="col-10 font-weight-bold text-center my-2 mx-auto">Your Cart</h2>
			 		<CartColumns />
					<CartList value={value} />
					<CartTotals value={value} history={this.props.history} />	
					</React.Fragment>	
					 			)
			 	}
			 	else
			 	{
			 		return <EmptyCart />;
			 	}
			 }}
			</ProductConsumer>
			</section>
		)
	}


}

export default Cart;