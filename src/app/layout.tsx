import './globals.css'
import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */
import localFont from 'next/font/local'

// Font files can be located inside of `app`
const dexterousFont = localFont({
	src: '../assets/righteousFont.ttf',
	display: 'swap',
})

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata: Metadata = {
	title: 'Dexterous',
	description: 'Dexterous storefront',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={dexterousFont.className}>{children}</body>
		</html>
	)
}
