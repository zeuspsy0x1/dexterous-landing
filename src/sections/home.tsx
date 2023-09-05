import TigerBackgroundImage from '@/components/images/homeTiger/tigerBackgroundImage'
import NavigationMenuMobile from '@/components/navigation/navigationMenuMobile'
import arrow from '@/assets/arrow.svg'
import Image from 'next/image'

const Home = () => {
	return (
		<section id='home' className='h-[110%] xl:hidden'>
			<NavigationMenuMobile />

			<picture className=' z-0 '>
				<TigerBackgroundImage />
			</picture>

			<div className=' z-40 flex flex-col -mt-[40vh] md:-mt-[60vh] h-screen ml-4'>
				<h1 className={' text-5xl md:text-8xl z-40'}>Dexterous</h1>

				<span className='text-base md:text-3xl ml-1 z-40'>Desafía los límites con tu destreza</span>
			</div>

			<div className='absolute inset-x-0 flex flex-col justify-center -mt-[68vh] md:-mt-[20vh] items-center opacity-50 md:hidden'>
				<div className='grid place-items-center'>
					<Image src={arrow} alt='arrow image' />
				</div>
			</div>
		</section>
	)
}

export default Home
