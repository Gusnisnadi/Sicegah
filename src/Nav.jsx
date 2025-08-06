import { useState, useEffect } from 'react';

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
    <div className='w-full fixed flex justify-between items-center top-0 h-[75px] p-[20px] bg-[#ffdc20] shadow-black shadow-md rounded-b-2xl'>
        <p className='p-[10px] text-3xl font-bold bg-gradient-to-r from-[#564900] via-[#836e00] to-[#b09400] text-transparent bg-clip-text italic'>Sicegah</p>
        <div className="text-xl font-mono text-[#564900]">
          {time.toLocaleTimeString()}
        </div>
        <div className='flex items-center gap-[10px]'>
          <p className='text-[#564900]'>Goesny -</p>
            <button type="button" onClick={() => setPage('home')} className='w-auto max-w-[100px] h-[50px] bg-[#564900] text-[#dcba00] rounded-2xl 
            px-[10px] cursor-pointer font-bold hover:bg-[#836e00] duration-500 hover:scale-[1.02] hover:text-[#ffe763] shadow-[#564900]'>Log-out</button>
        </div>
    </div>
  )
}

export default Nav;