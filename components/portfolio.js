"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "/components/ThemeProvider"; // Sesuaikan path

export default function Portfolio() {
  const { theme } = useContext(ThemeContext); // Ambil tema dari Context

  const projects = [
    {
      title: "Website Toko Online",
      image: "/website.jpeg",
      link: "/porto.pdf",
    },
    {
      title: "Sistem Pengelolaan Data Mahasiswa",
      image: "/mahasiswa.jpeg",
      link: "/porto.pdf",
    },
    {
      title: "Desain Grafis",
      image: "/desain grafis.jpeg",
      link: "/porto.pdf",
    },
  ];

  return (
    <motion.section
      id="portfolio"
      className={`min-h-screen flex flex-col justify-center  items-center text-center p-6 transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animasi untuk Judul */}
      <motion.h2
        className={`text-2xl sm:text-3xl font-bold mb-4 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        📁 Portfolio
      </motion.h2>

      {/* Animasi untuk Deskripsi */}
      <motion.p
        className={`mb-6 max-w-md text-sm sm:text-base ${
          theme === "dark" ? "text-WHITE" : "text-black"
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Saya telah mengerjakan berbagai proyek, termasuk pengembangan website dan desain grafis.
        Klik pada setiap proyek untuk melihat detailnya dalam portfolio saya.
      </motion.p>

      {/* List Proyek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12 sm:w-4/5">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black- rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-700"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-t-lg w-full h-auto"
            />
            <div className="p-4">
              <h3
                className={`text-sm sm:text-lg font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* Animasi untuk Tombol */}
      <motion.a
        href="/porto.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Lihat Portfolio 📄
      </motion.a>
    </motion.section>
  );
}
