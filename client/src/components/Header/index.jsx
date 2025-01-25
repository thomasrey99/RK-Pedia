import Link from "next/link";
import { MdOutlineLogin } from "react-icons/md";

const Header = () => {

  return (
    <header className="w-screen h-[15vh] p-4 flex items-center justify-between">
      <h1 className="text-white text-[1.5rem] font-bold">RK Pedia!</h1>
      <nav className="flex gap-3">
        <Link href={"/login"} className="text-white text-[1.5rem]"><MdOutlineLogin /></Link>
      </nav>
    </header>
  );
};

export default Header;
