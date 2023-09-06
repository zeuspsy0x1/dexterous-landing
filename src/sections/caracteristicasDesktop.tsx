import React from 'react'
import Image from 'next/image'
import caracteristicasImage from '@/assets/paw.png'

const CaracteristicasDesktop = () => {
	return (
		<div id='caracteristicasDesktop' className='hidden lg:block mt-20'>
			<div className='grid place-items-center'>
				<h2 className='text-5xl lg:text-7xl mb-4 2k:text-8xl'>Características</h2>

				<div className='p-2'>
					<Image
						src='https://res.cloudinary.com/dnw4kirdp/image/upload/v1693895717/Landing%20Pages/Dexterous/paw_ycyl5k.png'
						quality={100}
						alt='jacket image'
						/* fill={true} */
						width={1500}
						height={100}
					/>
				</div>
			</div>
		</div>
	)
}

export default CaracteristicasDesktop
