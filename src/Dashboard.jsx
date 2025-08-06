import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import { useEffect,useState } from 'react';
import Nav from './nav';
import ChatBot from './chatbot';
import Map from './map';
import LocateButton from './lokasi';

function Dashboard ({setPage}) {
	const [chatInitialized, setChatInitialized] = useState(false);

  const [triggerLocate, setTriggerLocate] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState({
    name: 'Pilih Lokasi Tujuan',
    keamanan: "-",
    penyakit: "-",        
    pencegahan: "-"
    });

    return(
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden pt-[100px]'>
          <Nav setPage={setPage} />
          <div className="flex w-[90%] h-[600px] border-indigo-950 border-solid border-[5px] rounded-4xl text-2xl font-semibold text-gray-700 p-[10px]">
            <div className='w-[50%] h-full rounded-3xl overflow-hidden border-solid border-black border-[5px]'>
              <Map triggerLocate={triggerLocate} setSelectedLocation={setSelectedLocation}/>
            </div>
            <div className='w-[50%] h-full flex flex-col justify-evenly p-[10px]'>
              <p className='text-3xl font-bold text-black'>Lokasi</p>
              <p className='text-xl text-black mb-[10px]'>{selectedLocation.name}</p>
              <p className='text-3xl font-bold text-black'>Tingkat Keamanan wilayah</p>
              <p className='text-xl text-black mb-[10px]'>{selectedLocation.keamanan}</p>
              <p className='text-3xl font-bold text-black'>Penyakit yang sedang menyebar</p>
              <p className='text-xl text-black mb-[10px]'>{selectedLocation.penyakit}</p>
              <p className='text-3xl font-bold text-black'>Upaya Pencegahan</p>
              <p className='text-xl text-black mb-[10px]'>{selectedLocation.pencegahan}</p>
              <LocateButton triggerLocation={setTriggerLocate}/>
            </div>
          </div>
          <div className='flex justify-evenly items-center w-[90%] h-auto p-[10px]'>
            <button type="button" className='bg-[#ffdc20] shadow-black shadow-sm w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('Cek-kesehatan')} > Cek Kesehatan </button>
            <button type="button" className='bg-[#ffdc20] shadow-black shadow-sm w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('ChatbotPages')}> Sipencegah </button>
          </div>
        </div>
    );
}

export default Dashboard;