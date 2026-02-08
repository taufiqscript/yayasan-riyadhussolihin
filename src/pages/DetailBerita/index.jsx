import { LIST_BERITA } from '@/constans/listBerita'
import React, { useEffect, useState } from 'react'
import { BsCalendar2, BsCalendar2CheckFill, BsCalendar2Date, BsCalendarHeartFill } from 'react-icons/bs'
import { FaBars, FaFacebook, FaInstagram, FaRegClock, FaTimes } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { MdOutlineAccountBalance, MdOutlineAccountCircle } from 'react-icons/md'

const DetailBerita = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [berita, setBerita] = useState([])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (LIST_BERITA) {
            LIST_BERITA.map(result => setBerita(result))
        }
    }, [])

    return (
        <div className='relative min-h-screen w-full'>
            {/* HEADER */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-md" : "bg-gray-500/60 text-white"
                    }`}
            >
                {/* Top Social Bar */}
                {!scrolled && (
                    <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-4">
                        <div className="flex items-center gap-3">
                            <button className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-all">
                                <FaInstagram className="text-[18px] text-white" />
                            </button>
                            <button className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-all">
                                <FaFacebook className="text-[18px] text-white" />
                            </button>
                        </div>

                        <button className="bg-white text-green-600 border border-green-500 hover:bg-green-500 hover:text-white py-2 px-4 rounded-md font-semibold text-[14px] transition-all">
                            Bayar Zakat
                        </button>
                    </div>
                )}

                {/* Navbar */}
                <nav className="w-full">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3">
                        <img
                            src="/logo-web.png"
                            alt="Logo"
                            loading="lazy"
                            onClick={() => location.reload()}
                            className="h-11 sm:h-12 md:h-14 w-auto object-contain cursor-pointer hover:scale-105 transition-transform bg-white rounded-full"
                        />

                        <div className="hidden md:flex gap-12 text-[15px] font-semibold">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "Tentang Kami", href: "#about" },
                                { name: "Layanan", href: "#services" },
                                { name: "Qurban", href: "#qurban" },
                                { name: "Santunan Akbar", href: "#santunan" },
                                { name: "Peduli Yatim", href: "#yatim" },
                                { name: "Video", href: "#video" },
                                { name: "Lokasi", href: "#map" },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="hover:text-green-600 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://wa.me/6281905056908"
                                target="_blank"
                                rel="noreferrer"
                                className="hidden md:inline-block bg-green-600 hover:bg-green-700 transition-all text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:opacity-95"
                            >
                                Donasi Sekarang
                            </a>

                            <button
                                className="md:hidden p-2 rounded-xl bg-white shadow hover:bg-gray-100 transition-all text-black"
                                onClick={() => setMobileOpen((v) => !v)}
                            >
                                {mobileOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </nav>


                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ${mobileOpen ? "max-h-[420px]" : "max-h-0 overflow-hidden"
                        } bg-white border-t`}
                >
                    <ul className="flex flex-col gap-2 px-6 py-4 text-base font-semibold text-gray-700">
                        {[
                            { name: "Home", href: "#home" },
                            { name: "Tentang Kami", href: "#about" },
                            { name: "Layanan", href: "#services" },
                            { name: "Qurban", href: "#qurban" },
                            { name: "Santunan Akbar", href: "#santunan" },
                            { name: "Peduli Yatim", href: "#yatim" },
                        ].map((m, i) => (
                            <li key={i} className="border-b last:border-none py-2">
                                <a
                                    href={m.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block hover:text-green-600 transition-colors"
                                >
                                    {m.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            <main className='pt-48 max-w-7xl mx-auto'>
                <h3 className='text-5xl font-semibold text-[#4CBB17]'>
                    {berita.title}
                </h3>

                <div className='flex items-center gap-2 pt-12'>
                    <p className='flex items-center gap-1.5'>
                        <MdOutlineAccountCircle className='text-[#4CBB17] text-[19px]' />
                        Yayasan Riyadhussolihin
                    </p>
                    <span className='px-2 text-gray-300 font-bold text-2xl'>
                        |
                    </span>
                    <p className='flex items-center gap-1.5'>
                        <BsCalendar2Date className='bg-[#4CBB17] text-white' />
                        {berita.date}
                    </p>
                    <span className='px-2 text-gray-300 font-bold text-2xl'>
                        |
                    </span>
                    <p className='flex items-center gap-1.5'>
                        <FaRegClock className='text-[#4CBB17]' />
                        12.23 pm
                    </p>
                </div>

                <div className='relative pt-4'>
                    <img
                        src={berita.img}
                        className='max-w-4xl max-h-[160vh] object-cover'
                    />
                    <p className='pt-4 leading-relaxed text-black text-justify whitespace-pre-line'>
                        {berita.desc?.replace(/\\n/g, "\n")}
                    </p>
                </div>
            </main>
        </div>
    )
}

export default DetailBerita