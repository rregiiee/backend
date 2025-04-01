"use client";
import { useState, useEffect, useContext } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { ThemeContext } from "/components/ThemeProvider"; // Sesuaikan path

export default function RatingForm() {
  const { theme } = useContext(ThemeContext);
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchRatings = async () => {
      const querySnapshot = await getDocs(collection(db, "ratings"));
      const ratingsArray = querySnapshot.docs.map((doc) => doc.data().rating);
      setRatings(ratingsArray);

      if (ratingsArray.length > 0) {
        const avg =
          ratingsArray.reduce((sum, r) => sum + r, 0) / ratingsArray.length;
        setAverageRating(avg.toFixed(1));
      }
    };
    fetchRatings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) return;

    try {
      await addDoc(collection(db, "ratings"), { rating });
      setRatings([...ratings, rating]);
      const newAverage = (
        (ratings.reduce((sum, r) => sum + r, 0) + rating) /
        (ratings.length + 1)
      ).toFixed(1);
      setAverageRating(newAverage);
      setRating(0);
    } catch (error) {
      console.error("Error submitting rating: ", error);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center mt-16 pb-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Judul Ratings di luar container form */}
<motion.h2
  className="text-3xl font-bold mb-6 text-center cursor-pointer transition-colors"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.1 }}
>
  ⭐ Ratings
</motion.h2>


      <motion.section
        className={`w-full max-w-lg mx-auto p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-colors 
                ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium">Pilih Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className={`border p-3 w-full rounded-md focus:ring-2 transition-colors cursor-pointer 
                            ${
                              theme === "dark"
                                ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-500"
                                : "bg-white text-gray-900 border-gray-300 focus:ring-blue-400"
                            }`}
              required
            >
              <option value="">-- Pilih --</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} ⭐
                </option>
              ))}
            </select>
          </div>

          <motion.button
            type="submit"
            className={`w-full p-3 rounded-md transition-all cursor-pointer font-semibold 
                        ${
                          theme === "dark"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-blue-500 hover:bg-blue-600"
                        } text-white`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kirim Rating
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl font-bold">
            Rata-rata Rating: {averageRating} ⭐
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {ratings.length} Voters
          </p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
