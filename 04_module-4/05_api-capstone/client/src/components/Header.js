import React from 'react';
import { Link } from 'react-router-dom'

function header(props) {


	return (
		<nav className='bg-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<div className='flex-shrink-0'>
							<img
								className='h-8 w-8'
								src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
								alt='Workflow'
							/>
						</div>
						<div className='hidden md:block'>
							<div className='ml-10 flex items-baseline space-x-4'>
								{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
								<Link to="/">
									<div
										className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>
									Search
								</div>
								</Link>
								<Link to="/favorites">
								<div
									className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
									Favorites
								</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='hidden md:block'>
						<div className='ml-4 flex items-center md:ml-6'>
							

							{/* <!-- Profile dropdown --> */}
							<div className='ml-3 relative'>
								<div>
								
								</div>
								{/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
								<div
									style={{ display: 'none' }}
									className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
									role='menu'
									aria-orientation='vertical'
									aria-labelledby='user-menu'>
									<a
										href='/#'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
										role='menuitem'>
										Your Profile
									</a>

									<a
										href='/#'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
										role='menuitem'>
										Settings
									</a>

									<a
										href='/#'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
										role='menuitem'>
										Sign out
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='-mr-2 flex md:hidden'>
						{/* <!-- Mobile menu button --> */}
						<button className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
							<span className='sr-only'>Open main menu</span>
							{/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
							<svg
								className='block h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
							{/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
							<svg
								className='hidden h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			
		
		</nav>
	);
}

export default header;
