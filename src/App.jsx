import { useState, useEffect } from 'react';
import Nav from './nav';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import Dashboard from './Dashboard';
import ChatBot from './chatbot';
import Map from './map';
import WebcamCapture from './webcam';

function App() {
  const [page, setPage] = useState('home'); 
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [form, setForm] = useState({
    nama: '',
    email: '',
    nik: '',
    password: '',
    gender: '',
    umur: '',
    alamat: '',
  });
  const [login, setLogin] = useState({
    emailOrNik: '',
    password: '',
  });

  const handleRegister = (e) => {
    e.preventDefault();
    setForm({
      nama: '',
      email: '',
      nik: '',
      password: '',
      gender: '',
      umur: '',
      alamat: '',
    });
    setPage('home');
    setShowLoginPrompt(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // login validation can be added here
    setPage('dashboard');
    setShowLoginPrompt(false);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col">
      
      {page === 'home' && (
        <>
          <div className='w-full h-screen flex flex-col justify-center items-center'>
            <p className='text-9xl font-bold bg-gradient-to-r from-[#564900] via-[#836e00] to-[#b09400] text-transparent bg-clip-text italic pb-[75px]'>Sicegah</p>
            <button
            className="bg-[#ffdc20] shadow-black shadow-sm text-black px-6 py-2 rounded-lg m-2"
            onClick={() => setPage('login')}
          >
            Masuk
          </button>
          <button
            className="bg-black shadow-[#ffdc20] shadow-sm text-[#ffdc20] px-6 py-2 rounded-lg m-2"
            onClick={() => setPage('register')}
          >
            Daftar
          </button>
          </div>
          {showLoginPrompt && (
            <div className="mt-4 text-red-500 font-semibold">
              Pendaftaran berhasil. Silakan login!
            </div>
          )}
        </>
      )}

      {page === 'login' && (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <form
          onSubmit={handleLogin}
          className="flex flex-col gap-2 w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Email atau NIK"
            className="border p-2 rounded-lg"
            value={login.emailOrNik}
            onChange={(e) =>
              setLogin({ ...login, emailOrNik: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-lg"
            value={login.password}
            onChange={(e) =>
              setLogin({ ...login, password: e.target.value })
            }
            required
          />
          <button type="submit" className="bg-[#ffdc20] shadow-black shadow-sm text-black py-2 rounded-lg">
            Login
          </button>
          <button
            type="button"
            onClick={() => setPage('home')}
            className="text-black underline"
          >
            Kembali
          </button>
        </form>
        </div>
      )}

      {page === 'register' && (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <form
          onSubmit={handleRegister}
          className="flex flex-col gap-2 w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Nama"
            className="border p-2 rounded-lg"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-lg"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="NIK"
            className="border p-2 rounded-lg"
            value={form.nik}
            onChange={(e) => setForm({ ...form, nik: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-lg"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <select
            className="border p-2 rounded-lg"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            required
          >
            <option value="">Pilih Gender</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          <input
            type="number"
            placeholder="Umur"
            className="border p-2 rounded-lg"
            value={form.umur}
            onChange={(e) => setForm({ ...form, umur: e.target.value })}
            required
          />
          <textarea
            placeholder="Alamat"
            className="border p-2 rounded-lg"
            value={form.alamat}
            onChange={(e) => setForm({ ...form, alamat: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="bg-[#ffdc20] shadow-black shadow-sm text-black py-2 rounded-lg">
            Daftar
          </button>
          <button
            type="button"
            onClick={() => setPage('home')}
            className="text-black underline"
          >
            Kembali
          </button>
        </form>
        </div>
      )}

      {page === 'dashboard' && (
        <Dashboard setPage={setPage} />
      )}

      { page === 'Cek-kesehatan' &&(
        <div className='w-full h-screen flex flex-col md:flex-row md:justify-evenly justify-start relative  pt-[100px] px-[10px] gap-[20px]'>
          <Nav />
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-full h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('alat-kesehatan')} > Gunakan alat </button>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-full h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('input-kamera')} > Gunakan Kamera </button>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-full h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('dashboard')} > Kembali </button>
        </div>
      )}

      {page === 'alat-kesehatan' &&(
        <div className='w-full h-auto flex flex-col items-center relative pt-[100px]'>
          <Nav />
          <p className='text-3xl font-bold text-black mb-[30px]'>Sinkronisasi selesai</p>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('hasil-kesehatan-alat')} > Liat hasil </button>
        </div>
      )}

      {page === 'input-kamera' &&(
        <div className='w-full h-auto flex flex-col items-center relative pt-[100px]'>
          <Nav />
          <WebcamCapture setPage={setPage}/>
        </div>
      )}

      {page === 'hasil-kesehatan-alat' &&(
        <div className='w-full h-auto flex flex-col items-center relative pt-[100px]'>
          <Nav />
          <p className='text-3xl font-bold text-black'>Anda saat ini berpotensi mengalami Penyakit : Demam</p>
          <p className='text-3xl font-bold text-black mb-[30px]'>Metode untuk mengobati: Istirahat yang cukup, Konsultasi ke dokter</p>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('dashboard')} > kembali </button>
        </div>
      )}

      {page === 'hasil-kesehatan-kamera' &&(
        <div className='w-full h-auto flex flex-col items-center relative pt-[100px]'>
          <Nav />
          <div className='w-full h-auto flex px-[10px]'>
            <p className='text-3xl w-[45%] text-black p-[5px] rounded-tl-[10px] bg-[#ffdc20] border-black border-solid border-[2px]'>Anda saat ini berpotensi mengalami Penyakit :</p>
            <p className='text-3xl w-[55%] font-bold bg-[#fff5bc] p-[5px] text-black border-black border-solid border-[2px] rounded-tr-[10px]'>Dermatitis (eksim)</p>
          </div>
          <div className='w-full h-auto flex px-[10px] mb-[20px]'>
            <p className='text-3xl w-[45%] text-black p-[5px] rounded-bl-[10px] bg-[#ffdc20] border-black border-solid border-[2px]'>Metode untuk mengobati:</p>
            <p className='text-3xl w-[55%] font-bold text-black p-[5px] rounded-br-[10px] bg-[#fff5bc] border-black border-solid border-[2px]'>Gunakan salep kortikosteroid (seperti hidrokortison), 
            Obat antihistamin jika gatal berlebihan, (Konsultasi ke dokter untuk pengobatan yang lebih akurat)</p>
          </div>
          
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('dashboard')} > kembali </button>
        </div>
      )}

      {page === 'ChatbotPages' && (
        <div className='w-full flex flex-col items-center relative'>
          <ChatBot webhookUrl={'https://marsel213.app.n8n.cloud/webhook/925c2233-576b-4319-b63f-9c6b95dd5815/chat'}/>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm  text-[#564900] w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer fixed top-[20px] right-[10px]' onClick={() => setPage('dashboard')} > kembali </button>
        </div>
      )}
    </div>
  );
}

export default App;
