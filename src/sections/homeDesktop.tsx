import TigerDesktopBackgroundImage from '@/components/images/homeTiger/tigerDesktopBackground'
import NavigationMenuMobile from '@/components/navigation/navigationMenuMobile'
import arrow from '@/assets/arrow.svg'
import Image from 'next/image'

const HomeDesktop = () => {
	return (
		<section id='home' className='hidden xl:block w-full'>
			<NavigationMenuMobile />

			<picture className=' z-0 '>
				<TigerDesktopBackgroundImage />
			</picture>

			<div className='absolute top-0 left-0 mt-[40dvh] ml-32'>
				<div className='z-40 flex flex-col  ml-4'>
					<h1 className={'md:text-7xl z-40'}>Dexterous</h1>

					<span className='text-base md:text-2xl ml-1 z-40'>Desafía los límites con tu destreza</span>
				</div>
			</div>
		</section>
	)
}

export default HomeDesktop
