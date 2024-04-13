import React from 'react';

import { LoaderCircle } from 'lucide-react';

export const Loader = () => {
	return (
		<div className=''>
			<LoaderCircle className='animate-spin' />
		</div>
	);
};