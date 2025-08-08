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
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden py-[100px]'>
          <Nav setPage={setPage} />
          <div className="flex w-[90%] h-[550px] border-black border-solid border-[5px] rounded-4xl text-2xl font-semibold text-gray-700 p-[10px] flex-col lg:flex-row lg:h-[525px]
          transition-all duration-500">
            <div className='w-full h-full rounded-3xl overflow-hidden border-solid border-black border-[5px]'>
              <Map triggerLocate={triggerLocate} setSelectedLocation={setSelectedLocation}/>
            </div>
            <div className='w-full h-full flex flex-col justify-between p-[10px]'>
              <p className='text-2xl lg:text-3xl font-bold text-black'>Lokasi</p>
              <p className='text-sm lg:text-lg text-black mb-[10px]'>{selectedLocation.name}</p>
              <p className='text-2xl lg:text-3xl font-bold text-black'>Tingkat Keamanan wilayah</p>
              <p className='text-sm lg:text-lg text-black mb-[10px]'>{selectedLocation.keamanan}</p>
              <p className='text-2xl lg:text-3xl font-bold text-black'>Penyakit yang sedang menyebar</p>
              <p className='text-sm lg:text-lg text-black mb-[10px]'>{selectedLocation.penyakit}</p>
              <p className='text-2xl lg:text-3xl font-bold text-black'>Upaya Pencegahan</p>
              <p className='text-sm lg:text-lg text-black mb-[10px]'>{selectedLocation.pencegahan}</p>
              <LocateButton triggerLocation={setTriggerLocate}/>
            </div>
          </div>
        </div>
    );
}

export default Dashboard;