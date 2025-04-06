import React from 'react'
import './Spiner.css'

const Spinner = () => {
  return (
	<div className='flex flex-col items-center space-y-2 max-h-[100vh]'>
		<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		<p>Loading...</p>
	</div>
  )
}

export default Spinner
