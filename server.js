import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Inisialisasi API Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "AIzaSyACylhVRejoVzqfkteseQ1qmMXycPSWmZY");


// Endpoint chatbot
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent(message);
    const response = await result.response.text();

    res.json({ reply: response });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

// Jalankan server di port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
