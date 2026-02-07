"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    FaBars,
    FaFacebook,
    FaHandshake,
    FaInstagram,
    FaMosque,
    FaTimes,
    FaWhatsapp,
} from "react-icons/fa"
import { useEffect, useState } from "react"
import { MdSchool } from "react-icons/md"
import { IoCheckmarkCircle, IoPeople } from "react-icons/io5"
import { RiUserSettingsFill } from "react-icons/ri"
import { IoIosPlay } from "react-icons/io"
import EachUtils from "@/utils/EachUtils"
import { LIST_CONTENT } from "@/constans/listContent"
import { LIST_DONASI } from "@/constans/listDonasi"
import { LIST_BERITA } from "@/constans/listBerita"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
}

const widthScreen = window.innerWidth

const Landing = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openContentIndex, setOpenContentIndex] = useState(null)

    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 120])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div
            style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
            className="relative min-h-screen text-gray-800 bg-gray-50"
        >
            {/* HEADER */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
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

                        <div className="flex gap-4">
                            <button className={`${widthScreen < 413 ? 'hidden' : 'bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-semibold text-[14px] transition-all'}`}>
                                0819 0505 6908
                            </button>
                            {console.log(widthScreen)}
                            <button className="bg-white text-green-600 border border-green-500 hover:bg-green-500 hover:text-white py-2 px-4 rounded-md font-semibold text-[14px] transition-all">
                                Bayar Zakat
                            </button>
                        </div>
                    </div>
                )}

                {/* Navbar */}
                <nav className="w-full">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3">
                        <img
                            src="/logo-web.png"
                            alt="Logo"
                            loading="lazy"
                            onClick={() => location.replace("/")}
                            className="h-11 sm:h-12 md:h-14 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
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
                                href="https://wa.me/6287846883117"
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

            {/* HERO */}
            <main id="home" className="pt-24">
                <section className="relative max-w-7xl mx-auto min-h-[90vh] flex items-center overflow-hidden rounded-b-3xl">
                    {/* Background Image */}
                    <motion.div style={{ y }} className="absolute inset-0">
                        <img
                            src="/foto 1.jpg"
                            className="w-full h-full object-cover"
                            alt="Hero"
                        />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                    {/* Content */}
                    <motion.div
                        variants={fadeStagger}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 w-full text-center px-6 md:px-16"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-lg"
                        >
                            Yayasan{" "}
                            <span className="text-[#4CBB17]">Riyadhussolihin</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed"
                        >
                            Dengan penuh rasa syukur, Yayasan Riyadhussolihin mengucapkan terima
                            kasih sebesar-besarnya kepada seluruh donatur atas dukungan dan
                            kepercayaannya. Semoga menjadi amal jariyah yang terus mengalir.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <button className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg transition-all">
                                Donasi Sekarang
                            </button>
                            <button className="px-6 py-3 rounded-xl border border-white/70 hover:bg-white/20 text-white font-semibold transition-all">
                                Lihat Program
                            </button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* STATS */}
                <section className="max-w-6xl mx-auto px-6 -mt-14 relative z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { title: "105+", desc: "Anak Yatim" },
                            { title: "10+", desc: "Pengajar" },
                            { title: "5+", desc: "Ustadz" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100"
                            >
                                <h3 className="text-4xl font-black text-green-600">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-semibold mt-2">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="mt-10 text-center text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
                        Yayasan Riyadhussolihin berupaya membangun Panti Asuhan Anak Yatim
                        Piatu Dhuafa. Kami mengajak Bapak/Ibu berpartisipasi melalui infaq
                        dan sedekah sukarela. InsyaAllah, setiap donasi menjadi keberkahan.
                    </p>
                </section>

                {/* ABOUT SECTION */}
                <section
                    id="about"
                    className="max-w-7xl mx-auto mt-16 px-6 md:px-10"
                >
                    <div className="bg-green-600 rounded-3xl p-10 shadow-xl">
                        <h3 className="text-3xl text-white font-bold text-center">
                            Tentang Yayasan Riyadhussolihin
                        </h3>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                {
                                    icon: <MdSchool size={48} />,
                                    title: "Pendidikan",
                                    desc: "Meningkatkan kualitas pendidikan dan membentuk generasi berakhlak.",
                                },
                                {
                                    icon: <IoPeople size={48} />,
                                    title: "Pemberdayaan",
                                    desc: "Mendorong kemandirian melalui pengembangan keterampilan.",
                                },
                                {
                                    icon: <FaMosque size={48} />,
                                    title: "Keagamaan",
                                    desc: "Menumbuhkan nilai keimanan dan memperkuat kehidupan beragama.",
                                },
                                {
                                    icon: <FaHandshake size={48} />,
                                    title: "Sosial",
                                    desc: "Membangun kepedulian sosial dan mempererat hubungan sesama.",
                                },
                                {
                                    icon: <RiUserSettingsFill size={48} />,
                                    title: "Interaktif",
                                    desc: "Menciptakan komunikasi aktif, terbuka, dan kolaboratif.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -6 }}
                                    className="text-center text-white bg-white/10 rounded-2xl p-5 backdrop-blur-md hover:bg-white/20 transition-all"
                                >
                                    <div className="flex justify-center mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-sm mt-2 text-white/90">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTENT + ACCORDION */}
                <section className="max-w-7xl mx-auto px-6 md:px-10 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">
                                Yayasan Riyadhussolihin
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Berada di wilayah Jakarta Timur, fokus pada pendidikan, sosial,
                                dan pemberdayaan umat.
                            </p>

                            <ul className="flex flex-col mt-6 gap-3">
                                <EachUtils
                                    of={LIST_CONTENT}
                                    render={(item, index) => (
                                        <div key={index} className="rounded-xl overflow-hidden">
                                            <button
                                                onClick={() =>
                                                    setOpenContentIndex(
                                                        openContentIndex === index ? null : index
                                                    )
                                                }
                                                className="w-full flex justify-between items-center bg-white border border-gray-200 px-5 py-4 text-green-600 font-semibold hover:bg-green-50 transition-all"
                                            >
                                                {item.title}
                                                <motion.span
                                                    animate={{ rotate: openContentIndex === index ? 90 : 0 }}
                                                >
                                                    <IoIosPlay />
                                                </motion.span>
                                            </button>

                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: openContentIndex === index ? "auto" : 0,
                                                    opacity: openContentIndex === index ? 1 : 0,
                                                }}
                                                className="bg-white border border-gray-200 px-5 py-4 text-sm text-gray-600 leading-relaxed overflow-hidden"
                                            >
                                                <ol className="list-decimal pl-5 whitespace-pre-line">{item.desc}</ol>
                                            </motion.div>
                                        </div>
                                    )}
                                />
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
                            <img src="/logo-web.png" className="w-28 h-28 mx-auto" />

                            <h4 className="text-xl font-bold mt-4 text-gray-800">
                                Mari Jadi Bagian Kebaikan
                            </h4>
                            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                                Setiap donasi anda akan membantu pendidikan, kebutuhan, dan masa
                                depan anak yatim.
                            </p>

                            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 px-4 py-3 rounded-xl text-white font-bold transition-all shadow-lg">
                                Donasi Sekarang
                            </button>
                        </div>
                    </div>
                </section>

                {/* DONASI PROGRAM */}
                <section
                    id="services"
                    className="pt-16 pb-16 mt-20 bg-gradient-to-b from-gray-50 to-white"
                >
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        <motion.h3
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            className="text-3xl font-bold text-gray-800 text-center mb-12"
                        >
                            Program Donasi
                        </motion.h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <EachUtils
                                of={LIST_DONASI}
                                render={(item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -8 }}
                                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                                    >
                                        <div className="relative">
                                            <img
                                                src={item.img}
                                                className="w-full h-[220px] object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20" />
                                        </div>

                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-gray-800">
                                                {item.title}
                                            </h3>

                                            <p className="flex items-center gap-2 text-sm pt-3 text-gray-600">
                                                {item.desc}
                                                <IoCheckmarkCircle className="text-green-500" />
                                            </p>

                                            <div className="flex justify-between items-center mt-5">
                                                <p className="text-green-600 font-bold">
                                                    Rp. -
                                                    <span className="text-gray-500 font-normal text-xs ml-1">
                                                        terkumpul
                                                    </span>
                                                </p>

                                                <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-all">
                                                    Donasi
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            />
                        </div>
                    </div>
                </section>

                {/* BERITA */}
                {/* BERITA TERKINI */}
                <section id="berita" className="pt-16 pb-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            className="text-3xl font-black text-gray-800 text-center"
                        >
                            BERITA TERKINI
                        </motion.h3>

                        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
                            Disini kumpulan berita yang bisa anda baca mengenai Layanan Kami
                        </p>

                        {/* GRID BERITA */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {LIST_BERITA.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 flex flex-col"
                                >
                                    {/* IMAGE */}
                                    <div className="relative w-full h-[190px] overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* CATEGORY BADGE */}
                                        <span className="absolute top-3 right-3 bg-green-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="font-black text-gray-800 text-[15px] leading-snug uppercase line-clamp-3">
                                            {item.title}
                                        </h3>

                                        <a
                                            href="#"
                                            className="mt-4 text-green-600 font-bold text-sm hover:text-green-700 transition-all"
                                        >
                                            READ MORE »
                                        </a>

                                        {/* DATE */}
                                        <div className="mt-auto pt-6 border-t border-gray-100">
                                            <p className="text-xs text-gray-400">{item.date}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* PAGINATION */}
                        <div className="flex justify-center items-center gap-6 mt-10 text-sm font-semibold text-gray-500">
                            <button className="hover:text-green-600 transition-all flex items-center gap-2">
                                « Previous
                            </button>

                            <button className="text-green-600 font-bold hover:underline transition-all">
                                Next »
                            </button>
                        </div>
                    </div>
                </section>


                {/* MAP SECTION */}
                <section id="map" className="pt-16 pb-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            className="text-3xl font-bold text-gray-800 text-center"
                        >
                            Lokasi Yayasan
                        </motion.h3>

                        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
                            Silakan kunjungi Yayasan Riyadhussolihin atau hubungi kami untuk informasi lebih lanjut.
                        </p>

                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            {/* MAP */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                            >
                                <iframe
                                    className="w-full h-[320px] md:h-[420px]"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2058915340913!2d106.88906917499862!3d-6.236570261072173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3003aaa0ac1%3A0x2231579e4108f578!2sYayasan%20Riyadhussolihin!5e0!3m2!1sid!2sid!4v1770447600060!5m2!1sid!2sid"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </motion.div>

                            {/* INFO */}
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                                <h4 className="text-xl font-bold text-gray-800">
                                    Yayasan Riyadhussolihin
                                </h4>

                                <p className="text-gray-600 mt-3 leading-relaxed">
                                    <div className="flex gap-1">
                                        <span>
                                            📍
                                        </span>
                                        Jl. Cipinang Bali II No.41A, RT.7/RW.13, Cipinang Muara, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13420 <br />
                                    </div>
                                    <div className="flex gap-1">
                                        <span>🕒</span>
                                        Jam Operasional: 08:00 - 17:00 WIB <br />
                                    </div>
                                    <div className="flex gap-1">
                                        <span>📞</span>
                                        0819 0505 6908 <br />
                                    </div>
                                    <div className="flex gap-1">
                                        <span>✉️</span>
                                        yayasanriyadhussolihin@gmail.com <br />
                                    </div>
                                </p>

                                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://maps.app.goo.gl/eiVukssrrrJ26sPv6"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-green-600 hover:bg-green-700 transition-all px-6 py-3 rounded-xl text-white font-bold shadow-md text-center"
                                    >
                                        Buka di Google Maps
                                    </a>

                                    <a
                                        href="https://wa.me/6281905056908"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all px-6 py-3 rounded-xl font-semibold text-center"
                                    >
                                        Chat WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VIDEO SECTION */}
                <section id="video" className="pt-16 pb-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            className="text-3xl font-bold text-gray-800 text-center"
                        >
                            Video Proses Pembangunan Yayasan
                        </motion.h3>

                        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
                            Dokumentasi proses renovasi dan pembangunan Yayasan Riyadhussolihin untuk menciptakan tempat yang lebih baik bagi anak-anak yatim dan dhuafa.
                        </p>

                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* VIDEO */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-3xl overflow-hidden shadow-xl border border-gray-100"
                            >
                                <iframe
                                    className="w-full h-[260px] md:h-[360px]"
                                    src="https://www.youtube.com/embed/ZOrN2GW2vZY"
                                    title="Video Yayasan"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* TEXT */}
                            <div className="bg-green-50 rounded-3xl p-8 border border-green-100 shadow-md">
                                <h4 className="text-2xl font-bold text-gray-800">
                                    Proses Renovasi & Pembangunan Yayasan Riyadhussolihin
                                </h4>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Saat ini Yayasan Riyadhussolihin sedang berada dalam tahap renovasi dan pembangunan demi menyediakan tempat yang lebih layak, nyaman, dan aman bagi anak-anak yatim serta dhuafa. Kami mengajak Bapak/Ibu Donatur untuk ikut berpartisipasi dalam amal jariyah ini, agar pembangunan yayasan dapat segera selesai dan memberi manfaat lebih luas.
                                </p>

                                <div className="mt-6 flex gap-4 flex-col sm:flex-row">
                                    <button className="bg-green-600 hover:bg-green-700 transition-all px-6 py-3 rounded-xl text-white font-bold shadow-lg">
                                        Donasi Sekarang
                                    </button>

                                    <a
                                        href="https://youtube.com/@riyadhussolihincipbali8715"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-6 py-3 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-600 hover:text-white transition-all text-center"
                                    >
                                        Lihat Channel Kami
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* LOGO */}
                        <div>
                            <img src="/logo-web.png" alt="Logo" className="w-20 mb-4" />
                            <p className="text-sm leading-relaxed text-gray-400">
                                Yayasan Riyadhussolihin berkomitmen untuk membantu anak yatim, dhuafa,
                                dan masyarakat melalui program pendidikan, sosial, dan keagamaan.
                            </p>
                        </div>

                        {/* MENU */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">Menu Cepat</h4>
                            <ul className="flex flex-col gap-2 text-sm">
                                <li>
                                    <a href="#home" className="hover:text-green-400 transition-all">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-green-400 transition-all">
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-green-400 transition-all">
                                        Program Donasi
                                    </a>
                                </li>
                                <li>
                                    <a href="#video" className="hover:text-green-400 transition-all">
                                        Video Kami
                                    </a>
                                </li>
                                <li>
                                    <a href="#map" className="hover:text-green-400 transition-all">
                                        Lokasi
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* KONTAK */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">Kontak</h4>
                            <ul className="text-sm text-gray-400 flex flex-col gap-2">
                                <div className="flex gap-1">
                                    <span>
                                        📍
                                    </span>
                                    Jl. Cipinang Bali II No.41A, RT.7/RW.13, Cipinang Muara, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13420 <br />
                                </div>
                                <div className="flex gap-1">
                                    <span>🕒</span>
                                    Jam Operasional: 08:00 - 17:00 WIB <br />
                                </div>
                                <div className="flex gap-1">
                                    <span>📞</span>
                                    0819 0505 6908 <br />
                                </div>
                                <div className="flex gap-1">
                                    <span>✉️</span>
                                    yayasanriyadhussolihin@gmail.com <br />
                                </div>
                            </ul>
                        </div>

                        {/* SOSMED */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-4">Ikuti Kami</h4>

                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaInstagram className="text-white text-lg" />
                                </a>

                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaFacebook className="text-white text-lg" />
                                </a>

                                <a
                                    href="https://wa.me/6281905056908"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaWhatsapp className="text-white text-lg" />
                                </a>
                            </div>

                            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all">
                                Donasi Sekarang
                            </button>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Yayasan Riyadhussolihin. All rights reserved.
                    </div>
                </div>
            </footer>


            {/* FLOATING WHATSAPP */}
            <a
                href="https://wa.me/6281905056908"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 shadow-xl flex items-center justify-center text-white text-2xl"
                >
                    <FaWhatsapp />
                </motion.div>
            </a>
        </div>
    )
}

export default Landing
