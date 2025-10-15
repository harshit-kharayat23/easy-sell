import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="text-2xl font-bold  w-screen h-screen flex items-center justify-center">
        <div>
        Todo Application
      <br />
      <Link className="text-md border m-2 " href="signup">Sign in to Todo App</Link>
      <br />
      <Link  className="text-md border m-2" href="signIn">Sign up to Todo App</Link>
      </div>

      </div>
  ); 
}
 