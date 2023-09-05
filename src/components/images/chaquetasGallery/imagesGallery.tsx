import React from 'react'
import Image from 'next/image'
import red1 from '@/assets/red(1).png'
import red2 from '@/assets/red(2).png'
import blue1 from '@/assets/blue(1).png'
import blue2 from '@/assets/blue(2).png'
import green1 from '@/assets/green(1).png'
import green2 from '@/assets/green(2).png'

const ImagesGallery = () => {
	const jacketImages = [red2, red1, blue2, blue1, green1, green2]

	const mappedImages = jacketImages?.map((image, i) => (
		<div style={{ backgroundColor: i % 2 === 0 ? '#181818' : '#0C0C0C' }} className='p-0'>
			<Image src={image} alt='jacket image' />
		</div>
	))

	return (
		<div className='grid place-items-center '>
			<div className='p-4 mt-6 md:w-3/4 lg:w-4/6'>{mappedImages}</div>
		</div>
	)
}

export default ImagesGallery
