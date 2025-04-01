"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "/components/ThemeProvider"; // Sesuaikan path

export default function Contact() {
  const { theme } = useContext(ThemeContext); // Ambil tema dari Context

  return (
    <motion.section
      id="contact"
      className={`h-screen flex flex-col justify-center items-center text-center p-6 transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animasi untuk Judul */}
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        📩 Contact
      </motion.h2>

      {/* Animasi untuk Deskripsi */}
      <motion.p
        className={`mb-4 max-w-md ${
          theme === "dark" ? "text-black-400" : "text-black-600"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        Jika ingin terhubung dengan saya, silakan hubungi melalui platform di bawah ini.
      </motion.p>

      {/* Informasi Kontak dengan Animasi */}
      <div className="space-y-4 text-lg">
        {[
          { label: "📞 No HP: ", value: "+62895340480897" },
          { label: "📧 Email: ", value: "rmdregi@gmail.com" }
        ].map((item, index) => (
          <motion.p
            key={index}
            className={theme === "dark" ? "text-white" : "text-black"}
            whileHover={{ scale: 1.05 }}
          >
            {item.label} <span className="text-blue-500">{item.value}</span>
          </motion.p>
        ))}
      </div>

      {/* Ikon Media Sosial dengan Animasi */}
      <div className="flex space-x-6 mt-6 text-2xl">
        {[
          { href: "mailto:rmdregi@gmail.com", icon: <FaEnvelope />, label: "Email" },
          { href: "https://wa.me/62895340480897", icon: <FaWhatsapp />, label: "WhatsApp" },
          { href: "https://facebook.com/reggi.egi", icon: <FaFacebook />, label: "Facebook" },
          { href: "https://instagram.com/rregiiee", icon: <FaInstagram />, label: "Instagram" },
          { href: "tel:+62895340480897", icon: <FaPhone />, label: "Telepon" }
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={theme === "dark" ? "text-white" : "text-black"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title={item.label}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
