import { useState, useEffect } from 'react';
import Nav from './nav';


function App() {
  const [page, setPage] = useState('home'); // 'home', 'login', 'register', 'dashboard'
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

  const [selectedLocation, setSelectedLocation] = useState({
  name: 'Limo, Depok',
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1026916824135!2d106.77283637475179!3d-6.354866093635089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef6a087b5331%3A0x7880e4d875cca94!2sFT%20UPN%20Veteran%20Jakarta%20Kampus%20Limo%20Depok!5e1!3m2!1sid!2sid!4v1754035374604!5m2!1sid!2sid',
  keamanan: "waspada",
  penyakit: "batuk",        
  pencegahan: "menggunakan masker"
  });


  return (
    <div className="w-full h-screen bg-white flex flex-col">
      
      {page === 'home' && (
        <>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <p className='text-9xl font-bold text-amber-300 italic m-[75px]'>Sicegah</p>
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
        <div className='w-full h-full flex flex-col justify-center items-center'>
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
        <div className='w-full h-full flex flex-col justify-center items-center'>
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
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden pt-[100px]'>
          <Nav />
          <div className="flex w-[90%] h-[600px] border-indigo-950 border-solid border-[5px] rounded-4xl text-2xl font-semibold text-gray-700 p-[10px]">
            <div className='w-[50%] h-full bg-amber-300 rounded-3xl overflow-hidden border-solid border-black border-[5px]'>
              <iframe src={selectedLocation.embedUrl} 
              style={{border:0, width:"100%" ,height:"100%"}} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"></iframe>
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
              <button type="button" className='bg-blue-300 w-auto h-auto min-h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('pilihLokasi')}> Pilih lokasi lainnya </button>
            </div>
          </div>
          <div className='flex justify-evenly items-center w-[90%] h-auto p-[10px]'>
            <button type="button" className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('Cek-kesehatan')} > Cek Kesehatan </button>
            <button type="button" className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' > Chatbot </button>
            <button type="button" className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' > Cek Dokter </button>
          </div>
        </div>
      )}

      { page === 'Cek-kesehatan' &&(
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden pt-[100px] gap-[20px]'>
          <Nav />
          <button type='button' className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('alat-kesehatan')} > Gunakan alat </button>
          <button type='button' className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('input-kesehatan')} > input manual </button>
          <button type='button' className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('dashboard')} > Kembali </button>
        </div>
      )}

      {page === 'alat-kesehatan' &&(
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden pt-[100px]'>
          <Nav />
          <p className='text-3xl font-bold text-black'>Sinkronisasi selesai</p>
          <button type='button' className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('hasil-kesehatan')} > Liat hasil </button>
        </div>
      )}

      {page === 'input-kesehatan' &&(
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden pt-[100px]'>
          <Nav />
          <p className='text-3xl font-bold text-black'>Sinkronisasi selesai</p>
          <button type='button' className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('hasil-kesehatan')} > Liat hasil </button>
        </div>
      )}

      {page === 'hasil-kesehatan' &&(
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden pt-[100px]'>
          <Nav />
          <p className='text-3xl font-bold text-black'>Penyakit anda saat ini adalah : Batuk</p>
          <p className='text-3xl font-bold text-black'>Metode untuk mengobati: meminum obat batu berdahak</p>
          <button type='button' className='bg-blue-300 w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer' onClick={() => setPage('dashboard')} > kembali </button>
        </div>
      )}

      {page === 'pilihLokasi' && (
        <div className='w-full h-auto flex flex-col items-center relative overflow-x-hidden pt-[100px]'>
          <Nav />
          <h2 className='text-3xl font-bold text-black mb-4'>Pilih Lokasi</h2>

          {/* EXAMPLE: dropdown for now */}
          <select
            onChange={(e) => {
              const selected = JSON.parse(e.target.value);
              setSelectedLocation(selected);
            }}
            className="p-2 border rounded mb-4 text-lg"
          >
            <option value="">-- Pilih lokasi --</option>
            <option value={JSON.stringify({
              name: "Limo, Depok",
              embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1026916824135!2d106.77283637475179!3d-6.354866093635089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef6a087b5331%3A0x7880e4d875cca94!2sFT%20UPN%20Veteran%20Jakarta%20Kampus%20Limo%20Depok!5e1!3m2!1sid!2sid!4v1754035374604!5m2!1sid!2sid",
              keamanan: "waspada",
              penyakit: "batuk",
              pencegahan: "menggunakan masker"
            })}>Limo, Depok</option>
            <option value={JSON.stringify({
              name: "Monas, Jakarta",
              embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.399077768899!2d106.82457787475008!3d-6.175392393812002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e1!3m2!1sid!2sid!4v1754056392104!5m2!1sid!2sid",
              keamanan: "aman",
              penyakit: "tidak ada",
              pencegahan: "tidak ada"
            })}>Monas, Jakarta</option>
          </select>

          <button
            onClick={() => setPage('dashboard')}
            className='bg-green-500 text-white py-2 px-6 rounded text-lg'
          >
            Gunakan Lokasi Ini
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
