import React from 'react'
import Image from 'next/image'
import mercadolibreLogo from '@/assets/ml-logo.png'
import whatsAppLogo from '@/assets/whatsapp-logo.png'
import instagramLogo from '@/assets/instagram-logo.png'
import tiktokLogo from '@/assets/tiktok-logo.png'

import LinkImage from 'next/link'

const Comprar = () => {
	return (
		<section id='comprar' className='grid place-items-center mt-20 xl:pb-40'>
			<h2 className='text-5xl lg:text-7xl lg:mb-4 2k:text-8xl'>Comprar</h2>

			<LinkImage
				href='https://dexterous.mercadoshops.com.co/'
				target='_blank'
				className='px-8 py-4 mx-10 mt-12 border border-neutral-700 rounded-lg bg-custom-neutral-900 w-72 2k:w-96'>
				<picture className='w-11/12'>
					<Image src={mercadolibreLogo} alt='Mercadolibre Logo' />
				</picture>
			</LinkImage>

			<span className='text-sm text-center opacity-30 mt-2 lg:text-base 2k:text-2xl'>Envíos a toda Colombia</span>

			<span className='text-2xl mt-8 lg:text-3xl 2k:text-4xl'>¿Preguntas?</span>

			<LinkImage
				href='https://wa.me/+573206469387'
				target='_blank'
				className='px-8 py-4 mx-10 mt-8 border border-neutral-700 rounded-lg bg-custom-neutral-900 w-72 2k:w-96'>
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
