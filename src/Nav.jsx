import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-regular-svg-icons';
import { faCommentNodes } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav ({setPage}) {
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  return(
    <>
    <div className='w-screen fixed flex justify-between items-center top-0 h-[75px] p-[20px] bg-[#ffdc20] shadow-black shadow-md z-[9999]'>
        <p className='p-[10px] text-3xl font-bold bg-gradient-to-r from-[#564900] via-[#836e00] to-[#b09400] text-transparent bg-clip-text italic'>Sicegah</p>
        <div className='flex items-center gap-[10px]'>
          <p className='text-[#564900] font-bold hidden md:block'>Moh Goesny Isnady -</p>
            <button type="button" onClick={() => setPage('home')} className='w-auto max-w-[100px] h-[50px] bg-[#564900] text-[#dcba00] rounded-2xl 
            px-[10px] cursor-pointer font-bold hover:bg-[#836e00] duration-500 hover:scale-[1.02] hover:text-[#ffe763] shadow-[#564900]'>Log-out</button>
        </div>
    </div>
    <div className='w-screen fixed flex justify-evenly items-center bottom-0 h-[60px] p-[20px] bg-[#ffdc20] border-t-black border-t-[5px] z-[9999]'>
      <button onClick={() => setPage('dashboard')}>
        <FontAwesomeIcon icon={faHouse} size='xl' />
      </button>
      <button onClick={() => setPage('ChatbotPages')}>
        <FontAwesomeIcon icon={faCommentNodes} size='xl'/>
      </button>
      <button onClick={() => setPage('input-kamera')}>
        <FontAwesomeIcon icon={faCamera} size='xl'/>
      </button>
      <FontAwesomeIcon icon={faBars} size='xl'/>
    </div>
    </>
  )
}

export default Nav;