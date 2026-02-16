import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subset: ["latin"],
});
const cn = (...classes) => classes.join(" ");
const Card = () => {
  return (

    // hover effect is to be applied while hovering on the parent div that is while hovering over the parent div the properti4es of the child div is going to change so for that we are going use "group" class of tailwind
    <div className="flex w-full rounded-2xl  bg-neutral-100 min-h-100 bg-[radial-gradient(#E4E4E7_1px,transparent_1px)] bg-size-[10px_10px] mx-auto p-8 items-center justify-center ">
      <div className="relative size-80  bg-neutral-100 bg-[radial-gradient(#E4E4E7_1px,transparent_1px)] bg-size-[10px_10px] rounded-2xl border border-neutral-300 shadow-2xl perspective-distant transform-3d group  ">
        <img src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card-image" className="w-full h-full object-cover fill rounded-2xl transform rotate-x-30! -rotate-y-10! rotate-z-20! translate-z-30!  transition duration-300 ease-in-out group-hover:translate-z-0! group-hover:rotate-x-0! group-hover:rotate-y-0! group-hover:rotate-z-0!"></img>
      </div>
    </div>
  );
};
export default Card;
