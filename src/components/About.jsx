import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				I am a 3rd year Computer Science Major and a minor in Business Administration at Memorial University of Newfoundland with a passion for front-end development.I am passionate about creating visually intriguing web designs using my problem-solving skills to come to unique solutions and learning new languages and software.
				When I amm not programming you can find me working out or listening to music.
				</p>
				<a
					href="mailto:jasjeets@mun.ca"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					jasjeets@mun.ca
				</a>
			</div>

			
		</div>
	);
}

export default About;
