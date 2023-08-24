'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import hamburgerIcon from '@/assets/hamburger-icon.png'
import closeIcon from '@/assets/x-icon.png'

const NavigationMenuMobile = () => {
	const [showNavigation, setShowNavigation] = useState(true)

	return (
		<div className='absolute z-50'>
			{showNavigation ? (
				<div className='flex w-[100vw]  mt-6 justify-end'>
					<div
						className=' mr-5'
						onClick={() => {
							setShowNavigation((booleanState) => !booleanState)
						}}>
						<Image src={hamburgerIcon} alt='Hamburger Icon' />
					</div>
				</div>
			) : (
				<div className='flex w-[100vw] h-[100vh] bg-[var(--body-background-color)] justify-end'>
					<div
						className='mt-6 mr-5'
						onClick={() => {
							setShowNavigation((booleanState) => !booleanState)
						}}>
						<Image src={closeIcon} alt='Close Icon' />
					</div>
				</div>
			)}
		</div>
	)
}

export default NavigationMenuMobile
