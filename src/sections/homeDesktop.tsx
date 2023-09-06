import TigerDesktopBackgroundImage from '@/components/images/homeTiger/tigerDesktopBackground'
import NavigationMenuMobile from '@/components/navigation/navigationMenuMobile'
import arrow from '@/assets/arrow.svg'
import Image from 'next/image'

const HomeDesktop = () => {
	return (
		<section id='home' className='hidden xl:block w-full '>
			<NavigationMenuMobile />

			<picture className=' z-0 '>
				<TigerDesktopBackgroundImage />
			</picture>

			<div className='absolute top-0 left-0 mt-[40dvh] ml-32 2xl:ml-52 2k:ml-80 4k:mt-[20dvh]'>
				<div className='z-40 flex flex-col  ml-4'>
					<h1 className={'z-40 md:text-7xl 2xl:text-8xl 2k:text-9xl '}>Dexterous</h1>

					<span className='ml-1 z-40 text-base md:text-2xl 2xl:text-3xl  2k:text-4xl'>
						Desafía los límites con tu destreza
					</span>
				</div>
			</div>
		</section>
	)
}

export default HomeDesktop
