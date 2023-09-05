import React from 'react'
import Image from 'next/image'
import red1 from '@/assets/red(1).png'
import red2 from '@/assets/red(2).png'
import blue1 from '@/assets/blue(1).png'
import blue2 from '@/assets/blue(2).png'
import green1 from '@/assets/green(1).png'
import green2 from '@/assets/green(2).png'
import ImageBars from '@/components/cssThings/imageBars'

const ImagesGallery = () => {
	const jacketImages = [red2, blue1, green1]
	const jacketImages2 = [red1, blue2, green2]

	const mappedImages = jacketImages?.map((image, i) => (
		<div style={{ backgroundColor: i % 2 === 0 ? '#181818' : '#0C0C0C' }} className='p-2 w-auto'>
			<Image src={image} alt='jacket image' />
		</div>
	))

	const mappedImages2 = jacketImages2?.map((image, i) => (
		<div style={{ backgroundColor: i % 2 === 1 ? '#181818' : '#0C0C0C' }} className='p-2 w-auto '>
			<Image src={image} alt='jacket image' />
		</div>
	))

	return (
		<div className='px-10 w-9/12 md:w-3/4 lg:w-4/6'>
			<ImageBars left={1} />
			<div className='flex flex-row '>{mappedImages}</div>
			<div className='flex flex-row '>{mappedImages2}</div>
			<ImageBars left={0} />
		</div>
	)
}

export default ImagesGallery
