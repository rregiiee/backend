"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-black-100 text-center p-6"
      initial={{ opacity: 0, y: 50 }} // Mulai dengan opacity 0 dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat masuk viewport, naik ke posisi semula
      viewport={{ once: false, amount: 0.3 }} // Aktif tiap kali masuk viewport
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Foto Profil dengan Animasi Zoom In */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-white-500"
      >
        <Image
          src="/profil.jpeg"
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          className="hover:brightness-90 transition-all duration-150"
        />
      </motion.div>

      {/* Nama dengan Animasi Sama Seperti Foto Profil */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        className="text-4xl font-bold mt-4 text-blue-600 transition-all duration-150"
      >
        Reggi Ramdhani
      </motion.h1>

      {/* Deskripsi dengan Animasi Sama */}
      <motion.p
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        className="text-white-600 mt-2 text-lg max-w-md transition-all duration-150"
      >
        Web Developer | UI UX Design | Graphic Design
      </motion.p>

      {/* Tombol Contact dengan Animasi Sama */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg transition-all duration-150"
      >
        Contact Me
      </motion.a>
    </motion.section>
  );
}
