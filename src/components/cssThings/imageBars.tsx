import React from 'react'

interface ImageBarsProps {
	left: number
}

const ImageBars: React.FC<ImageBarsProps> = ({ left }) => {
	return (
		<>
			{left === 1 ? (
				<div className='absolute -ml-[20px]  -mt-[20px]'>
					<div className='w-24 h-1 bg-zinc-600'></div>
					<div className='w-1 h-24 bg-zinc-600'></div>
				</div>
			) : (
				<div className='rotate-180 -mt-[80px] -mr-[20px] bottom-0 right-0'>
					<div className='w-24 h-1 bg-zinc-600 '></div>
					<div className='w-1 h-24 bg-zinc-600'></div>
				</div>
			)}
		</>
	)
}

export default ImageBars
