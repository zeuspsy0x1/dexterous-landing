import Home from '@/sections/home'
import Chaquetas from '@/sections/chaquetas'
import Caracteristicas from '@/sections/caracteristicas'
import Comprar from '@/sections/comprar'
import HomeDesktop from '@/sections/homeDesktop'
import ChaquetasDesktop from '@/sections/chaquetasDesktop'
import CaracteristicasDesktop from '@/sections/caracteristicasDesktop'

export default function app() {
	return (
		<>
			<Home />
			<Chaquetas />
			<Caracteristicas />

			<HomeDesktop />
			<ChaquetasDesktop />
			<CaracteristicasDesktop />
			<Comprar />
		</>
	)
}
