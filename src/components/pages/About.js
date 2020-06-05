import React, { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<h1>About</h1>
			<p>
				App to search for Github users utilizing React functional components,
				Hooks, Context API and Github API.
			</p>
			<p className='py-1'></p>
			<p>
				The main purpose of this particular About page is to demonstrate what
				happens you go back Home, where the users you searched for should still
				be loaded.
			</p>
		</Fragment>
	);
};

export default About;
