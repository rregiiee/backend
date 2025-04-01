import "./globals.css";
import ThemeProvider from "/components/ThemeProvider"; // Import ThemeProvider

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider> {/* Bungkus di sini */}
        
      </body>
    </html>
  );
}