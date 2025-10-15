import Link from "next/link";

const Header = ({font}:{font?:string}) => {
  return (
    <header className="py-2 bg-gray-950">
      <div className=" max-w-[100rem] px-12  mx-auto flex justify-between">
        <Link href="/">
        <h1 className={`uppercase text-yellow-500 text-center py-2 ${font}`}>
            Easy-Sell
            </h1>
        
        </Link>

        <Link href="/product/upload" className={`uppercase text-green-300 py-2  text-xl hover:text-yellow-700 ${font}`}>Upload {">"}</Link>
      </div>
    </header>
  );
};

export default Header;
