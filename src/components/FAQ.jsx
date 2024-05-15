import React from 'react';

const FAQ = () => {
    return (
<div className='max-w-6xl mx-auto'>
<section className="bg-orange-300">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="divide-y dark:divide-gray-300">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is HTML?</h3>
				<p className="md:pl-0 md:col-span-7">The full form of HTML is Hypertext Markup Language. HTML is a standard mark – up language that used build files that are showcased as a web page throughout the browsers.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is CSS?</h3>
				<p className="md:pl-0 md:col-span-7">`The full form of CSS is Cascading Style Sheets. It is enabled by browsers and is specifically designed to distinguish the document's content from the report's appearance. It explains how to show HTML elements on display.`</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is JS?</h3>
				<p className="md:pl-0 md:col-span-7">The Full Form Of JS is Javascript. JS stands for JavaScript. It is a text-based, lightweight, cross-platform, and interpreted scripting programming language. This language is very popular for developing web pages.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Is web development easy to learn for a non-programmer/coder?</h3>
				<p className="md:pl-0 md:col-span-7">Learning web development can be both challenging and rewarding for a non-programmer or someone with no coding experience. The difficulty of learning web development largely depends on your commitment, interest, and the resources available to you. Here are a few points to consider: 
                
                1.Fundamental Concepts, 2.Resources, 3.Practice, 4.Patience and Persistence, 5.Frameworks and Libraries, 6.Community Support
                
                In conclusion, while learning web development can be challenging for a non-programmer, it is definitely achievable with the right resources, dedication, and practice. Start with the basics, be patient with yourself, and don't hesitate to seek help when needed. Good luck on your web development journey!</p>
			</div>
		</div>
	</div>
</section>	
</div>
    );
};

export default FAQ;