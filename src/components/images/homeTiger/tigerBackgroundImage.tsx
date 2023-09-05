import Image from 'next/image'
import React from 'react'
import tiger from '@/assets/tiger-half.png'

const TigerBackgroundImage = () => {
	return (
		<picture className='w-[100vw] grid place-items-end opacity-40'>
			<Image fill={false} src={tiger} alt='tiger image' />
		</picture>
	)
}

export default TigerBackgroundImage
