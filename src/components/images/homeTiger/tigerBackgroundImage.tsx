import Image from 'next/image'
import React from 'react'
import tiger from '@/assets/tiger-half.png'

const TigerBackgroundImage = () => {
	return (
		<div className='w-[100vw] opacity-30'>
			<Image fill={false} src={tiger} alt='tiger image' />
		</div>
	)
}

export default TigerBackgroundImage
