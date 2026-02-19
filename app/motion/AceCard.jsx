import { Outfit } from "next/font/google";
import { motion } from "motion/react";
import Image from "next/image";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AceCard = () => {
  return (
    <>
      <div className="size-80 h-[26rem]! bg-white flex rounded-xl shadow-aceCard p-4 flex-col gap-2">
        <h2
          className={`${outfit.className} text-xl text-center font-medium tracking-tight`}
        >
          Crazy Card
        </h2>
        <p
          className={`${outfit.className} text-neutral-500 text-center text-xs leading-relaxed`}
        >
          Beautiful and modern UI components built with Tailwind CSS and Framer
          Motion.
        </p>
        <div id="button-container" className="mt-2 flex items-center justify-center">
          <button
            className={`${outfit.className} text-xs px-4 py-2 rounded-lg cursor-pointer flex items-center gap-1 shadow-acecard`}
          >
            {" "}
            <Image src="/image.png" alt="logo" width={25} height={25} className="h-4 w-4" />{" "}
            <span className={outfit.className}>Aceternity</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default AceCard;
