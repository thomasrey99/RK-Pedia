import Filters from "@/components/filters";
import { Rubik } from "next/font/google";
const rubik = Rubik({
  variable: "--rubik",
  subsets: ["latin"],
});


export default function CharactersLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <div className="w-[100vw] flex flex-col md:flex-row">
          <div className="w-full hidden md:block md:w-1/5 h-[85vh]">
            <Filters />
          </div>
          <div className="w-full md:w-4/5 h-[85vh] overflow-hidden p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
