import React from 'react';

function Title({name,title})
{
	return(
			<div className="row">
				<div className="col-10 mx-auto my-2 text-center">
					<h2 className="font-weight-bold">
					{name} <strong>{title}</strong>
					</h2>
				</div>
			</div>
		)
}

export default Title;
