import ImagesGallery from '@/components/images/chaquetasGallery/imagesGallery'
import ImagesGalleryDesktop from '@/components/images/chaquetasGallery/imagesGalleryDesktop'
import React from 'react'
import ImageBars from '@/components/cssThings/imageBars'
import './chaquetasDesktop.css'

const Chaquetas = () => {
	return (
		<div id='chaquetas' className='hidden lg:block mt-20'>
			<div className='grid place-items-center'>
				<div className='flex flex-col items-end'>
					<h2 className='text-5xl lg:text-7xl mb-4 place-self-start'>Chaquetas</h2>
				</div>
			</div>
			<div className='grid place-items-center mt-8'>
				<div className='absolute stroke-text flex flex-col text-7xl right-[7.5vw] '>
					<span>2</span>
					<span>0</span>
					<span>2</span>
					<span>3</span>
				</div>
				<ImagesGalleryDesktop />
			</div>
		</div>
	)
}

export default Chaquetas
