"use client";
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ThemeContext } from "/components/ThemeProvider"; // Sesuaikan path

export default function CommentForm() {
  const { theme } = useContext(ThemeContext); // Ambil tema dari Context
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  // Ambil data komentar dari Firebase
  useEffect(() => {
    const fetchComments = async () => {
      const querySnapshot = await getDocs(collection(db, "comments"));
      const commentsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsArray);
    };
    fetchComments();
  }, []);

  // Submit komentar ke Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return;

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        name,
        message,
        createdAt: new Date(),
      });

      setComments([...comments, { id: docRef.id, name, message }]);
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  return (
    <>
      {/* JUDUL COMMENTS DI LUAR FORM */}
      <motion.h2
        className={`text-3xl font-bold mb-6 text-center ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        📝 User Comments
      </motion.h2>

      {/* SECTION FORM KOMENTAR */}
      <motion.section
  className={`max-w-lg mx-auto p-4 rounded-lg shadow-lg flex flex-col transition-colors ${
    theme === "dark" ? "bg-gray-900" : "bg-white"
  } px-4 sm:px-6`} // Gunakan px-4 untuk mobile dan sm:px-6 untuk layar yang lebih besar
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
        <form onSubmit={handleSubmit} className="space-y-3">
          <motion.input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className={`w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-400 transition-colors ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-white-300"
            }`}
            required
            whileHover={{ scale: 1.05 }}
            whileFocus={{ borderColor: "#3b82f6" }}
          />
          <motion.textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a comment..."
            className={`w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-400 transition-colors ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-white-300"
            }`}
            required
            whileHover={{ scale: 1.05 }}
            whileFocus={{ borderColor: "#3b82f6" }}
          />
          <motion.button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Comment
          </motion.button>
        </form>

        {/* DAFTAR KOMENTAR */}
        <div className="mt-6 space-y-4">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg shadow-md transition-colors ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-white-100 text-black"
              }`}
            >
              <strong className="text-blue-600">{comment.name}</strong>
              <p>{comment.message}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
