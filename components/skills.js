"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPaintBrush } from "react-icons/fa";
import { SiCanva, SiAdobephotoshop } from "react-icons/si";
import { PiLightbulbBold } from "react-icons/pi"; // Ikon lampu
import { useContext } from "react";
import { ThemeContext } from  "/components/ThemeProvider"; // Sesuaikan path

export default function Skills() {
  const { theme } = useContext(ThemeContext); // Ambil tema dari Context
  
  return (
    <motion.section
      id="skills"
      className={`h-screen flex flex-col justify-center items-center text-center p-6 transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animasi hover untuk judul dan ikon lampu */}
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ duration: 0.3 }}
      >
        <PiLightbulbBold className="text-yellow-400 text-4xl" />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold"
        >
          Skills
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mt-6">
        {/* CorelDRAW */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <FaPaintBrush className="text-green-400 text-5xl" />
          <p className={`mt-2 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>CorelDRAW</p>
          <p className={`text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
            Desain vektor untuk logo dan ilustrasi.
          </p>
        </motion.div>

        {/* Photoshop */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <SiAdobephotoshop className="text-blue-500 text-5xl" />
          <p className={`mt-2 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Photoshop</p>
          <p className={`text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
            Edit foto dan manipulasi gambar profesional.
          </p>
        </motion.div>

        {/* Canva */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <SiCanva className="text-blue-400 text-5xl" />
          <p className={`mt-2 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Canva</p>
          <p className={`text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
            Desain cepat untuk poster & media sosial.
          </p>
        </motion.div>

        {/* HTML */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <FaHtml5 className="text-orange-500 text-5xl" />
          <p className={`mt-2 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>HTML</p>
          <p className={`text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
            Struktur utama halaman web.
          </p>
        </motion.div>

        {/* CSS */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <FaCss3Alt className="text-blue-500 text-5xl" />
          <p className={`mt-2 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>CSS</p>
          <p className={`text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
            Mengatur tampilan dan layout web.
          </p>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <FaJs className="text-yellow-400 text-5xl" />
          <p className={`mt-2 font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>JavaScript</p>
          <p className={`text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
            Menambahkan interaksi pada web.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
