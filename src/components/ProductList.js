import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import Footer from './Footer';
import Tour from './Tour';
import MoreInfo from './MoreInfo';
export default class ProductList extends Component
{
	render()
	{
		return(
		     <React.Fragment>
		          <Tour />
		     		<div className="py-5">
		     			<div className="container">
		     				<Title name="OUR" title="PRODUCTS"/>
		     				<div className="row">
		     					<ProductConsumer>
		     						{value => {
		     							return value.products.map( product => {
		     								return <Product key={product.id} product={product} />;
		     							});
		     						}}
		     					</ProductConsumer>
		     				</div>
		     			</div>
		     		</div>
		     		<MoreInfo />
		     		<Footer />
		     </React.Fragment>	
		);
	}

}

