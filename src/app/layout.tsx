import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page"; 
import Cartprovider from "../../providers/Cartprovider";
import { Toaster } from 'react-hot-toast';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Jupiter Gems & Jewellers",
  description: "Jewellery Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.className} ${poppins.className} h-full`}>
        <body className="flex flex-col min-h-screen bg-slate-100">
          <Toaster
            toastOptions={{
              style: {
                background: 'rgb(51 65 85)',
                color: '#fff'
              }
            }}
          />
          <Cartprovider>
          
            <ClerkLoading>
              <div className="flex flex-col items-center text-center mt-32">
                LOADING...
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </ClerkLoaded>
          </Cartprovider>
        </body>
      </html>
    </ClerkProvider>
  );
}
