"use client";
import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { motion, AnimatePresence, useInView } from "framer-motion"; // Animasi
import { ThemeContext } from "/components/ThemeProvider"; // Sesuaikan path

export default function Chatbot() {
  const { theme } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message: input,
      });
      setMessages([...newMessages, { text: res.data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`max-w-lg w-full mx-auto p-4 sm:px-6 border rounded-lg shadow-lg pb-20 mt-10 
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-700 shadow-gray-700"
                    : "bg-white border-black shadow-md"
                }`}
    >
      {/* Judul Chatbot */}
      <motion.h2
        className="text-3xl font-bold mb-6 cursor-pointer transition-colors text-center flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        🤖 Chat Bot
      </motion.h2>

      {/* Chat Container */}
      <motion.div
        ref={chatContainerRef}
        className="h-64 overflow-y-auto border-b mb-4 p-2 scroll-smooth"
        whileHover={{
          backgroundColor: theme === "dark" ? "#1e293b" : "#f1f5f9",
          scale: 1.02,
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`p-2 my-1 max-w-[75%] rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : theme === "dark"
                  ? "bg-gray-700 text-gray-200 mr-auto"
                  : "bg-gray-200 text-gray-700 mr-auto"
              }`}
            >
              {msg.text}
            </motion.p>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </motion.div>

      {/* Form Input */}
      <form onSubmit={sendMessage} className="flex gap-2 sm:px-2">
        <motion.input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`flex-grow p-2 rounded-l-lg focus:outline-none focus:ring-2 transition-all duration-200
                        ${
                          theme === "dark"
                            ? "bg-gray-800 border-white text-white focus:ring-blue-400"
                            : "bg-white border-black text-black focus:ring-blue-400 shadow-md"
                        }`}
          placeholder="Tulis pesan..."
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <motion.button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Kirim
        </motion.button>
      </form>
    </motion.div>
  );
}
