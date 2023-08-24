import TigerBackgroundImage from '@/components/images/homeTiger/tigerBackgroundImage'
import NavigationMenuMobile from '@/components/navigation/navigationMenuMobile'

const Home = () => {
	return (
		<section>
			<NavigationMenuMobile />

			<picture className='absolute z-0 '>
				<TigerBackgroundImage />
			</picture>

			<div className='absolute z-40 flex flex-col mt-[50vh] h-screen ml-4'>
				<span className={' text-5xl '}>Dexterous</span>

				<span className='text-base'>Desafía los límites con tu destreza</span>
			</div>
		</section>
	)
}

export default Home
