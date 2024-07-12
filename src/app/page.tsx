import Image from "next/image";
//import Link from 'next/link';
import { get_random_recipe_id } from '@/utils/utils';
import RandomRecipeBrowser from "@/components/random-recipe-browser";

export default function Page() {
  return (
    <div className="flex flex-col justify-evenly content-center h-screen">
      <div className="m-auto mt-10 w-max">
        <h1 className="text-xl m-10">Recipe Adviser</h1>
        <RandomRecipeBrowser />     
      </div>
    </div>
  );
}
