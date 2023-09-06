import React from 'react'
import Image from 'next/image'
import round1 from '@/assets/round-1.png'
import round2 from '@/assets/round-2.png'
import round3 from '@/assets/round-3.png'
import round4 from '@/assets/round-4.png'

const Caracteristicas = () => {
	const roundCharacteristics = [
		{
			logo: 'Logo reflectivo',
			image: round1,
		},
		{
			logo: 'Puño con resorte',
			image: round2,
		},
		{
			logo: 'Espaldar reflectivo',
			image: round3,
		},
		{
			logo: 'Cremalleras antifluido',
			image: round4,
		},
	]

	const mappedCharacteristics = roundCharacteristics?.map(({ logo, image }, i) => {
		return (
			<div className='grid place-items-center '>
				<div className='h-[256px] w-[256px] max-h-[256px] max-w-[256px] border-neutral-700'>
					<div
						key={i}
						className='border border-neutral-700 rounded-full overflow-hidden'
						style={{
							width: '256px',
							height: '256px',
						}}>
						<Image src={image} alt='Jacket characteristic image' />
					</div>
				</div>
				<span key={i} className='text-2xl mb-8 mt-4 lg:mb-16 lg:mt-2 lg:text-3xl'>
					{logo}
				</span>
			</div>
		)
	})

	return (
		<section id='caracteristicas' className='mt-20 xl:hidden'>
			<div className='grid place-items-center'>
				<h2 className=' text-5xl lg:text-7xl 2k:text-8xl '>Características</h2>
			</div>
			<div className='mt-12'>{mappedCharacteristics}</div>
		</section>
	)
}

export default Caracteristicas
