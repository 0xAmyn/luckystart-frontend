import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Celestial NFT",
  description: "Mint Yours Now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-100 flex flex-col min-h-screen">
          <nav className="bg-white shadow p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <Image src="/logo.jpg" alt="logo" width="35" height="35" />
                <div className="ml-6 space-x-4">
                  <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                  <a href="/swap" className="text-gray-600 hover:text-gray-900">Swap</a>
                  <a href="/collection" className="text-gray-600 hover:text-gray-900">My Collection</a>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">Connect</button>
            </div>
          </nav>

          <main className="flex flex-grow p-4">
            {children}
          </main>

          <footer className="bg-white text-center p-4 shadow w-full">
            <p className="text-gray-600">&copy; 2024 Celestial NFTs</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
