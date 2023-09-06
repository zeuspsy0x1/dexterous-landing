'use client'

import React from 'react'
import { Link } from 'react-scroll'

const NavigationMenuMobile = () => {
	return (
		<ol className='z-50 absolute flex justify-end left-auto right-20  flex-row text-var(--light-gray-tex) text-2xl 2xl:text-3xl 2k:text-4xl 4k:text-5xl font-light py-2 mt-5'>
			<li className='mt-4 p-2 '>
				<Link
					to='chaquetasDesktop'
					target='_blank'
					spy={true}
					smooth={true}
					offset={-100}
					duration={420}
					className='cursor-pointer m-4 p-1'>
					Chaquetas
				</Link>
			</li>
			<li className='mt-4 p-2'>
				<Link
					to='caracteristicasDesktop'
					target='_blank'
					spy={true}
					smooth={true}
					offset={-100}
					duration={420}
					className='cursor-pointer m-4 p-1'>
					Características
				</Link>
			</li>
			<li className='mt-4 p-2'>
				<Link
					to='comprar'
					target='_blank'
					spy={true}
					smooth={true}
					offset={-100}
					duration={420}
					className='cursor-pointer m-4 p-1'>
					Comprar
				</Link>
			</li>
		</ol>
	)
}

export default NavigationMenuMobile
