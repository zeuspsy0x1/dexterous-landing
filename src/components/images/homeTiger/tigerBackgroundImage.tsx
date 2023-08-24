import Image from 'next/image'
import React from 'react'
import tiger from '@/assets/tiger-half.png'

const TigerBackgroundImage = () => {
	return (
		<div className='w-[100vw] '>
			<Image fill={false} src={tiger} alt='adwda awdaw d' />
		</div>
	)
}

export default TigerBackgroundImage
