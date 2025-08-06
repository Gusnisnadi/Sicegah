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
            <p className='text-9xl font-bold text-amber-300 italic mb-[75px]'>Sicegah</p>
            <button
            className="bg-blue-500 text-white px-6 py-2 rounded m-2"
            onClick={() => setPage('login')}
          >
            Masuk
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded m-2"
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
            className="border p-2"
            value={login.emailOrNik}
            onChange={(e) =>
              setLogin({ ...login, emailOrNik: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2"
            value={login.password}
            onChange={(e) =>
              setLogin({ ...login, password: e.target.value })
            }
            required
          />
          <button type="submit" className="bg-blue-500 text-white py-2 rounded">
            Login
          </button>
          <button
            type="button"
            onClick={() => setPage('home')}
            className="text-blue-500 underline"
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
            className="border p-2"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="NIK"
            className="border p-2"
            value={form.nik}
            onChange={(e) => setForm({ ...form, nik: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <select
            className="border p-2"
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
            className="border p-2"
            value={form.umur}
            onChange={(e) => setForm({ ...form, umur: e.target.value })}
            required
          />
          <textarea
            placeholder="Alamat"
            className="border p-2"
            value={form.alamat}
            onChange={(e) => setForm({ ...form, alamat: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="bg-green-500 text-white py-2 rounded">
            Daftar
          </button>
          <button
            type="button"
            onClick={() => setPage('home')}
            className="text-blue-500 underline"
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
        <div className='w-full h-screen flex flex-col items-center justify-evenly relative  pt-[100px] gap-[20px]'>
          <Nav />
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-auto max-w-[200px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('alat-kesehatan')} > Gunakan alat </button>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-auto max-w-[200px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('input-kamera')} > Gunakan Kamera </button>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-auto max-w-[200px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('dashboard')} > Kembali </button>
        </div>
      )}

      {page === 'alat-kesehatan' &&(
        <div className='w-full h-auto flex flex-col items-center relative pt-[100px]'>
          <Nav />
          <p className='text-3xl font-bold text-black mb-[30px]'>Sinkronisasi selesai</p>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('hasil-kesehatan')} > Liat hasil </button>
        </div>
      )}

      {page === 'input-kamera' &&(
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden pt-[100px]'>
          <Nav />
          <WebcamCapture setPage={setPage}/>
        </div>
      )}

      {page === 'hasil-kesehatan' &&(
        <div className='w-full h-auto flex flex-col items-center relative pt-[100px]'>
          <Nav />
          <p className='text-3xl font-bold text-black'>Penyakit anda saat ini adalah : Batuk</p>
          <p className='text-3xl font-bold text-black mb-[30px]'>Metode untuk mengobati: meminum obat batu berdahak</p>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('dashboard')} > kembali </button>
        </div>
      )}

      {page === 'ChatbotPages' && (
        <div className='w-full flex flex-col items-center relative overflow-x-hidden'>
          <ChatBot webhookUrl={'https://marsel213.app.n8n.cloud/webhook/925c2233-576b-4319-b63f-9c6b95dd5815/chat'}/>
          <button type='button' className='bg-[#ffdc20] shadow-black shadow-sm  text-[#564900] w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer fixed top-[20px] right-[10px]' onClick={() => setPage('dashboard')} > kembali </button>
        </div>
      )}
    </div>
  );
}

export default App;
