import React from 'react';
import logo from '../../../../assets/Hostinger_Logo.png';
import usaFlag from '../../../../assets/Flag_of_the_United_States.png';
const NavBar = () => {
    
    return (
        <div className='flex'>
            <img src={logo} alt="HOSTINGER" className='w-[100%] max-w-[100px] max-h-[100px]'/>
            <div className=' flex'>
                <img src={usaFlag} alt="" className='w-[100%] max-w-[40px] max-h-[100px]'/>
                <p>English</p>
            </div>
        </div>
    );
};

export default NavBar;