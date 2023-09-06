import Image from 'next/image'
import React from 'react'
import tigerFullImage from '@/assets/tiger-full.png'

const TigerDesktopBackgroundImage = () => {
	return (
		<div className='grid place-items-center w-full'>
			{/* <picture className='w-[100%] md:w-[100%]  -mt-[54dvh] 4k:mt-[-40dvh]  opacity-40'> */}
			<picture className='w-full   -mt-[54dvh] 4k:mt-[-40dvh]  opacity-40'>
				<Image fill={false} src={tigerFullImage} alt='tiger image' />
			</picture>
		</div>
	)
}

export default TigerDesktopBackgroundImage
