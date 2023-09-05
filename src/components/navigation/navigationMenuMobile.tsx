'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import hamburgerIcon from '@/assets/hamburger-icon.svg'
import closeIcon from '@/assets/x-icon.svg'

const NavigationMenuMobile = () => {
	const [showNavigation, setShowNavigation] = useState(true)

	return (
		<div className='fixed z-50 md:hidden '>
			{showNavigation ? (
				<div className='flex w-[100vw] mt-6 justify-end'>
					<div
						className='mr-5'
						onClick={() => {
							setShowNavigation((booleanState) => !booleanState)
						}}>
						<Image src={hamburgerIcon} alt='Hamburger Icon' />
					</div>
				</div>
			) : (
				<div className='w-[100dvw] h-[100vh] bg-[var(--body-background-color)]'>
					<div className='flex  justify-end'>
						<div
							className='mt-6 mr-5 h-12 overflow-visible'
							onClick={() => {
								setShowNavigation((booleanState) => !booleanState)
							}}>
							<Image src={closeIcon} alt='Close Icon' />
						</div>
					</div>

					{/* Nav menu */}

					<ol className='flex justify-center items-center flex-col text-var(--light-gray-tex) text-xl  font-semibold py-2 mt-5'>
						<li className='mt-4 p-2'>
							<Link
								onClick={() => {
									setShowNavigation((booleanState) => !booleanState)
								}}
								to='home'
								target='_blank'
								spy={true}
								smooth={true}
								offset={-100}
								duration={420}
								className='cursor-pointer m-4 p-1 text-4xl font-light'>
								Inicio
							</Link>
						</li>
						<li className='mt-4 p-2 '>
							<Link
								onClick={() => {
									setShowNavigation((booleanState) => !booleanState)
								}}
								to='chaquetas'
								target='_blank'
								spy={true}
								smooth={true}
								offset={-100}
								duration={420}
								className='cursor-pointer m-4 p-1 text-4xl font-light'>
								Chaquetas
							</Link>
						</li>
						<li className='mt-4 p-2'>
							<Link
								onClick={() => {
									setShowNavigation((booleanState) => !booleanState)
								}}
								to='caracteristicas'
								target='_blank'
								spy={true}
								smooth={true}
								offset={-100}
								duration={420}
								className='cursor-pointer m-4 p-1 text-4xl font-light'>
								Características
							</Link>
						</li>
						<li className='mt-4 p-2'>
							<Link
								onClick={() => {
									setShowNavigation((booleanState) => !booleanState)
								}}
								to='comprar'
								target='_blank'
								spy={true}
								smooth={true}
								offset={-100}
								duration={420}
								className='cursor-pointer m-4 p-1 text-4xl font-light'>
								Comprar
							</Link>
						</li>
					</ol>
				</div>
			)}
		</div>
	)
}

export default NavigationMenuMobile
