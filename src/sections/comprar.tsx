import React from 'react'
import Image from 'next/image'
import mercadolibreLogo from '@/assets/ml-logo.png'
import whatsAppLogo from '@/assets/whatsapp-logo.png'
import instagramLogo from '@/assets/instagram-logo.png'
import tiktokLogo from '@/assets/tiktok-logo.png'

import LinkImage from 'next/link'

const Comprar = () => {
	return (
		<section id='comprar' className='grid place-items-center mt-20 '>
			<h2 className='text-5xl lg:text-7xl lg:mb-4'>Comprar</h2>

			<LinkImage
				href='https://www.linkedin.com/in/zeus1337/'
				target='_blank'
				className='px-12 py-4 mx-10 mt-12 border border-neutral-700 rounded-lg bg-custom-neutral-900  md:w-2/4 lg:w-1/3 xl:w-1/4'>
				<picture className='w-11/12'>
					<Image src={mercadolibreLogo} alt='Mercadolibre Logo' />
				</picture>
			</LinkImage>

			<span className='text-sm text-center opacity-30 mt-2 lg:text-base'>Envíos a toda Colombia</span>

			<span className='text-2xl mt-8 lg:text-3xl'>¿Preguntas?</span>

			<LinkImage
				href='https://www.linkedin.com/in/zeus1337/'
				target='_blank'
				className='px-12 py-4 mx-10 mt-8 border border-neutral-700 rounded-lg bg-custom-neutral-900 md:w-2/4 lg:w-1/3 xl:w-1/4'>
				<picture className='w-9/12'>
					<Image src={whatsAppLogo} alt='WhatsApp logo' />
				</picture>
			</LinkImage>

			<div className='flex flex-row mt-36 mb-36 lg:mb-10 h-14 w-28 overflow-hidden'>
				<LinkImage href='https://www.instagram.com/dexterous.store/' target='_blank' className='h-auto mr-2'>
					<Image src={instagramLogo} alt='Instagram logo' />
				</LinkImage>

				<LinkImage href='https://www.tiktok.com/@dexterous.store' target='_blank' className='h-auto'>
					<Image src={tiktokLogo} alt='Tiktok logo' />
				</LinkImage>
			</div>
		</section>
	)
}

export default Comprar
