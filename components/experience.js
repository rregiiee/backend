"use client";
import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaLaptop, FaBriefcase } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "/components/ThemeProvider"; // Sesuaikan path

export default function Experience() {
  const { theme } = useContext(ThemeContext); // Ambil tema dari Context

  return (
    <motion.section
      id="experience"
      className={`h-screen flex flex-col justify-center items-center text-center p-6 transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo Experience dengan Hover Animasi */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.2, rotate: 5 }}
      >
        <FaBriefcase className="text-6xl mb-4" />
      </motion.div>

      {/* Judul Pengalaman */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold"
      >
        Experience
      </motion.h2>

      {/* Pengalaman Desain Grafis */}
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
        <FaPaintBrush className="text-5xl text-blue-400 mt-6" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mt-2 max-w-md ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Saya memiliki pengalaman dalam Desain Grafis menggunakan Canva, Photoshop,  
        dan CorelDRAW untuk membuat desain kreatif seperti logo, poster,  
        dan konten media sosial.
      </motion.p>

      {/* Pengalaman Pemrograman Web */}
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
        <FaCode className="text-5xl text-green-400 mt-6" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mt-2 max-w-md ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Dalam bidang pengembangan web, saya menguasai HTML, CSS, dan JavaScript
        untuk membangun tampilan website yang responsif dan interaktif.
      </motion.p>

      {/* Pengalaman UI/UX */}
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
        <FaLaptop className="text-5xl text-yellow-400 mt-6" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mt-2 max-w-md ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Saya juga memiliki minat dalam UI/UX Design, memahami prinsip desain  
        yang baik untuk menciptakan pengalaman pengguna yang optimal.
      </motion.p>
    </motion.section>
  );
}
