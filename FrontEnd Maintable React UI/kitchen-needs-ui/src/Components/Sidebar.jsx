import React, { useState } from 'react';
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill ,RiHome4Fill ,RiDatabase2Fill , RiBook3Fill , RiDashboardFill } from "react-icons/ri";
import { FaPersonCircleQuestion ,FaFileExport} from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { SiLichess } from "react-icons/si";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { BsBinoculars } from "react-icons/bs";
import { CgMoreR } from "react-icons/cg";


function Sidebar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between p-1 bg-Accent text-fontColor transition-all duration-300 overflow-hidden ${menu ? 'w-52' : 'w-20'}`}>
      
      <button 
        onClick={toggleMenu} 
        className="text-Accent bg-fontColor py-1 px-2 m-4 mt-12 rounded-full hover:bg-slate-100 self-end">
        {menu ? <RiArrowLeftDoubleFill size={24}/> : <RiArrowRightDoubleFill size={24}/>}
      </button>
    
      <ul className="flex flex-col items-start mx-5 gap-10 ">
        <li className="flex items-center gap-3 text-lg hover:text-slate-50">
          <RiHome4Fill size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>Home</span>
        </li>
        <li className="flex items-center gap-3 text-lg hover:text-slate-50">
          <RiDatabase2Fill size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>DataBase</span>
        </li>
        <li className="flex items-center gap-3 text-lg hover:text-slate-50">
          <RiBook3Fill  size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>Records</span>
        </li>
        <li className="flex items-center gap-3 text-lg hover:text-slate-50">
          <FaFileExport  size={24} className='ml-1' />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>Export</span>
        </li>
        <li className="flex items-center gap-3 text-lg hover:text-slate-50">
          <CgMoreR size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>More</span>
        </li>
      </ul>


      <div className="flex flex-col items-center gap-3 mb-4">
       
        <span className="flex items-center gap-2 hover:text-slate-50">
          <FaPersonCircleQuestion size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>Support</span>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
