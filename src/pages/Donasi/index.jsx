import { LIST_BERITA } from '@/constans/listBerita'
import { dataAtom } from '@/jotai/atoms'
import EachUtils from '@/utils/EachUtils'
import { useAtom } from 'jotai'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Donasi = () => {

    const navigate = useNavigate()

    const [data, setData] = useAtom(dataAtom)

    return (
        <div className="relative min-h-screen w-full bg-gray-50 py-8">

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-6 md:px-10 pb-20 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* CONTENT */}
                    <article className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100 p-7 md:p-6">

                        {/* EXTRA IMAGE / VIDEO */}
                        <div
                            onClick={() => {
                                setData(null)
                                navigate('/')
                            }}
                            className="inline-flex items-center gap-2 bg-white px-5 py-3 mb-4 rounded-xl shadow hover:shadow-md transition-all text-gray-700 font-semibold hover:text-green-600 cursor-pointer"
                        >
                            <HiArrowNarrowLeft className="text-xl" />
                            Kembali ke beranda
                        </div>

                        <img
                            src={data.img}
                            className="w-full max-h-[80vh] object-cover rounded-2xl shadow"
                        />

                        {/* DESCRIPTION */}
                        <div className="mt-4 text-gray-700 leading-relaxed text-[15px] md:text-3xl whitespace-pre-line font-bold">
                            {data.title}
                        </div>

                        <div className='grid grid-cols-3 mt-14 border-b-3 border-b-gray-300'>
                            <button
                                className='py-4 bg-[#4CBB17] text-white rounded-t-lg cursor-pointer font-semibold'
                            >
                                Keterangan
                            </button>
                            <button>
                                btn2
                            </button>
                            <button>
                                btn3
                            </button>
                        </div>
                    </article>

                    {/* SIDEBAR */}
                    <aside className="space-y-8">

                        {/* DAFTAR ISI */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-black text-xl text-gray-800 mb-4">
                                Daftar Berita
                            </h3>

                            <div className="space-y-3 text-sm text-gray-600">
                                <EachUtils
                                    of={LIST_BERITA}
                                    render={(item, index) => (
                                        <a
                                            key={index}
                                            onClick={() => location.replace(`/detail-berita/${item.id}`)}
                                            className={`block p-3 rounded-xl transition-all border cursor-pointer ${item.id == data.id
                                                ? "bg-green-50 border-green-300 text-green-700 font-bold"
                                                : "hover:bg-gray-50 border-gray-100"
                                                }`}
                                        >
                                            {item.title}
                                        </a>
                                    )}
                                />
                            </div>
                        </div>

                        {/* DONASI CARD */}
                        <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-3xl shadow-xl p-7 text-white sticky">
                            <h3 className="text-xl font-black">
                                Mari Dukung Pembangunan Yayasan
                            </h3>
                            <p className="mt-3 text-white/90 text-sm leading-relaxed">
                                Bantuan Anda sangat berarti untuk renovasi, pendidikan anak yatim,
                                dan kegiatan sosial Yayasan Riyadhussolihin.
                            </p>

                            <a
                                href="https://wa.me/6281905056908"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 block text-center bg-white text-green-700 font-black py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                            >
                                Donasi Sekarang
                            </a>
                        </div>

                        {/* SOSMED */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-black text-xl text-gray-800 mb-4">
                                Ikuti Kami
                            </h3>

                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                                >
                                    <FaInstagram className="text-xl" />
                                </a>

                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                                >
                                    <FaFacebook className="text-xl" />
                                </a>

                                <a
                                    href="https://wa.me/6281905056908"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                                >
                                    <FaWhatsapp className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-10">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div>
                            <img src="/logo-web.png" alt="Logo" className="w-20 mb-4" />
                            <p className="text-sm leading-relaxed text-gray-400">
                                Yayasan Riyadhussolihin berkomitmen membantu anak yatim, dhuafa,
                                serta masyarakat melalui program pendidikan, sosial, dan keagamaan.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-black text-lg mb-4">Menu Cepat</h4>
                            <ul className="flex flex-col gap-2 text-sm">
                                <li><a href="#home" className="hover:text-green-400 transition-all">Home</a></li>
                                <li><a href="#about" className="hover:text-green-400 transition-all">Tentang Kami</a></li>
                                <li><a href="#services" className="hover:text-green-400 transition-all">Program Donasi</a></li>
                                <li><a href="#berita" className="hover:text-green-400 transition-all">Berita</a></li>
                                <li><a href="#video" className="hover:text-green-400 transition-all">Video</a></li>
                                <li><a href="#map" className="hover:text-green-400 transition-all">Lokasi</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-black text-lg mb-4">Kontak</h4>
                            <div className="text-sm text-gray-400 flex flex-col gap-3 leading-relaxed">
                                <p>📍 Cipinang Bali II No.41A, Jakarta Timur</p>
                                <p>🕒 08:00 - 17:00 WIB</p>
                                <p>📞 0819 0505 6908</p>
                                <p>✉️ yayasanriyadhussolihin@gmail.com</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-black text-lg mb-4">Ikuti Kami</h4>

                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaInstagram className="text-white text-lg" />
                                </a>

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaFacebook className="text-white text-lg" />
                                </a>

                                <a
                                    href="https://wa.me/6281905056908"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaWhatsapp className="text-white text-lg" />
                                </a>
                            </div>

                            <a
                                href="https://wa.me/6281905056908"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 block w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-95 text-white font-black py-3 rounded-2xl shadow-xl transition-all text-center"
                            >
                                Donasi Sekarang
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Yayasan Riyadhussolihin. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Donasi