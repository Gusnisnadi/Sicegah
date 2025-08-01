import { useState, useEffect } from 'react';

function Nav () {
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
    <div className='w-full fixed flex justify-between items-center top-0 h-[75px] p-[20px] bg-amber-300 rounded-b-2xl'>
        <p className='text-3xl font-bold text-white italic'>Sicegah</p>
        <div className="text-xl font-mono text-black">
          {time.toLocaleTimeString()}
        </div>
        <div className='flex items-center gap-[10px]'>
          <p className='text-black'>Goesny -</p>
            <button type="button" onClick={() => setPage('home')} className='w-auto max-w-[75px] h-[50px] bg-black text-white rounded-2xl px-[10px] cursor-pointer'>log-out</button>
        </div>
    </div>
  )
}

export default Nav;