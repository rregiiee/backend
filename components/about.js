"use client"; // Karena pakai useContext & useEffect
import { useContext } from "react";
import { ThemeContext } from  "/components/ThemeProvider"; // Sesuaikan path

import { motion } from "framer-motion";
import { FaLaptopCode, FaUser } from "react-icons/fa";

export default function About() {
  const { theme } = useContext(ThemeContext); // Ambil tema dari Context

  return (
    <motion.section
      id="about"
      className={`h-screen flex flex-col justify-center items-center text-center p-6 transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Icon Profil */}
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 200 }}>
        <FaUser className="text-4xl text-white-300 mb-4" />
      </motion.div>

      <motion.h2 className="text-3xl font-bold" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
        About Me
      </motion.h2>

      {/* Icon Coding */}
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 200 }}>
        <FaLaptopCode className="text-5xl text-blue-400 mt-4" />
      </motion.div>

      <motion.p className="mt-2 max-w-md" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
        Halo! Saya <span className="text-blue-400 font-semibold">Reggi Ramdhani</span>,  
        lahir pada <span className="text-blue-400 font-semibold">26 Oktober 2005</span>.  
        Saya adalah mahasiswa semester 4 jurusan Sistem Informasi yang memiliki  
        ketertarikan besar dalam <span className="text-blue-400 font-semibold">pemrograman, desain grafis, dan pembuatan konten</span>.  
        Tujuan saya adalah mengembangkan keterampilan di bidang web development dan media digital  
        untuk menciptakan proyek yang berdampak dan menarik. 🚀
      </motion.p>
    </motion.section>
  );
}
