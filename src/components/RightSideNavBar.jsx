import React from 'react'
import person from "../assets/icons/person.png";
import { useNavigate } from "react-router-dom";
const RightSideNavBar = () => {
    const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between mb-5 mx-2 md:mx-4 gap-2'>
      <h1 className='text-[20px] md:text-[22px] lg:text-[25px] font-[500]'>Welcome!</h1>
      <img src={person} alt="" onClick={() => navigate("/")} className=' cursor-pointer  w-9 h-9 md:w-10 md:h-10 '/>
    </div>
  )
}

export default RightSideNavBar;
