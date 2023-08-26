import TigerBackgroundImage from '@/components/images/homeTiger/tigerBackgroundImage'
import NavigationMenuMobile from '@/components/navigation/navigationMenuMobile'
import arrow from '@/assets/arrow.svg'
import Image from 'next/image'

const Home = () => {
	return (
		<section id='home' className='h-[100vh]'>
			<NavigationMenuMobile />

			<picture className='absolute z-0 '>
				<TigerBackgroundImage />
			</picture>

			<div className='absolute z-40 flex flex-col mt-[50vh] h-screen ml-4'>
				<span className={' text-5xl '}>Dexterous</span>

				<span className='text-base'>Desafía los límites con tu destreza</span>
			</div>

			<div className='absolute inset-x-0 flex flex-col justify-center mt-[80vh] items-center opacity-50'>
				<div className='grid place-items-center'>
					<Image src={arrow} alt='arrow image' />
				</div>
			</div>
		</section>
	)
}

export default Home
