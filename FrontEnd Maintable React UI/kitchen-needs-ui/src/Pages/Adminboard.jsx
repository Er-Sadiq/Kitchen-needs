import React from 'react'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard'
import Footer from '../Components/Footer'

function Adminboard() {
  return (
    <div className='min-h-screen w-screen overflow-x-hidden text-fontColor bg-slate-100'>
      <div className='grid grid-cols-1 md:grid-cols-[auto,1fr,auto] h-full overflow-hidden'>
       <Sidebar/>
       <div className='flex justify-center items-center p-6'>
        <Dashboard/>
       </div>
       
       
        </div>
        <Footer/>
    </div>
  )
}

export default Adminboard