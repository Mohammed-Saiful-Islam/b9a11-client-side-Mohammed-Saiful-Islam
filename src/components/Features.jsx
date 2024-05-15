import React from 'react';

const Features = () => {
    return (
<section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Our Fetures</h2>
		<p className="dark:text-gray-600">We have some Fetures that you may like it</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
        <div className='min-h-72'>
                <img className='h-full' src="https://img.freepik.com/premium-psd/html-file-3d-render-cute-icon-illustration-folder-file-format_540495-896.jpg?w=740" alt="" />
            </div>
			<h3 className="my-3 text-3xl font-semibold">HTML</h3>
			<div className="space-y-1 leading-tight">
				<p>For Begginer</p>
				<p>For Mid Level</p>
				<p>For High Level</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
        <div className='min-h-72'>
                <img className='h-full' src="https://img.freepik.com/premium-psd/psd-css-coding-3d-illustration_487474-7100.jpg?w=740" alt="" />
            </div>
			<h3 className="my-3 text-3xl font-semibold">CSS</h3>
			<div className="space-y-1 leading-tight">
            <p>For Begginer</p>
            <p>For Mid Level</p>
			<p>For High Level</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<div className='min-h-72'>
                <img className='h-full' src="https://img.freepik.com/premium-psd/stylized-3d-javascript-icon-side-view_600269-290.jpg?w=1380" alt="" />
            </div>
			<h3 className="my-3 text-3xl font-semibold">JS</h3>
			<div className="space-y-1 leading-tight">
			<p>For Begginer</p>
            <p>For Mid Level</p>
			<p>For High Level</p>
			</div>
		</div>

	</div>
</section>
    );
};

export default Features;