import ImagesGallery from '@/components/images/chaquetasGallery/imagesGallery'
import React from 'react'

const Chaquetas = () => {
	return (
		<section id='chaquetas' className='md:mt-56 xl:hidden'>
			<div className='grid place-items-center'>
				<div className='flex flex-col items-end'>
					<h2 className='text-5xl lg:text-7xl '>Chaquetas</h2>
					<span className='text-xl lg:text-3xl ' style={{ color: 'var(--red-letters-color)' }}>
						2023
					</span>
				</div>
			</div>
			<ImagesGallery />
		</section>
	)
}

export default Chaquetas
