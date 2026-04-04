import React from 'react'
import person from "../assets/icons/person.png";
import { useNavigate } from "react-router-dom";
const RightSideNavBar = () => {
    const navigate = useNavigate();

  return (
    <div className='flex justify-between mb-5 mx-4 '>
      <h1 className='text-[25px] font-[500]'>Welcome!</h1>
      <img src={person} alt="" onClick={() => navigate("/")} className=' cursor-pointer  w-10 h-10 '/>
    </div>
  )
}

export default RightSideNavBar;
