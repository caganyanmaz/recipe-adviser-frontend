import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col justify-evenly content-center h-screen">
      <div className="m-auto mt-10 w-max">
        <h1 className="text-xl m-10">Recipe Adviser</h1>
        <Link href="/recipe/1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Give me a random recipe</Link>      
      </div>
    </div>
  );
}
