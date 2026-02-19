import { Outfit } from "next/font/google";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Zap } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { PenTool } from "lucide-react";
import { Plus } from "lucide-react";
import Image from "next/image";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AceCard = () => {
  return (
    <>
      <div className="size-80 h-[32rem]! bg-neutral-50  flex rounded-xl shadow-aceCard p-4 flex-col gap-2">
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
        <div
          id="button-container"
          className="mt-2 flex items-center justify-center"
        >
          <button
            className={`${outfit.className} text-xs px-4 py-2 rounded-lg cursor-pointer flex items-center gap-1 shadow-acecard`}
          >
            {" "}
            <Image
              src="/image.png"
              alt="logo"
              width={25}
              height={25}
              className="h-4 w-4"
            />{" "}
            <span className={outfit.className}>Aceternity</span>
            <X className="ml-1 size-3"></X>
          </button>
        </div>
        <div className="relative h-full bg-gray-100 mt-4 flex flex-1 border border-dashed border-neutral-200 rounded-lg">
          <div className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200">
            <div className={`${outfit.className} p-4 text-xs flex gap-4`}>
              <div className="size-8 flex shadow-acecard rounded-md items-center justify-center bg-neutral-50">
                <MessageCircleMore className="size-6 " />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-neutral-900 font-medium">
                  Message Deivery
                </p>
                <p className="text-xs text-neutral-500">
                  Lighting fast message delivery
                </p>
              </div>
            </div>
            <div className={`${outfit.className} p-4 text-xs flex gap-4`}>
              <div className="size-8 flex shadow-acecard rounded-md items-center justify-center bg-neutral-50">
                <ChartNoAxesCombined className="size-6 " />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xs text-neutral-900 font-medium">
                  Chart Analysis
                </p>
                <p className="text-xs text-neutral-500">
                  chart analysis for data-driven decisions
                </p>
              </div>
            </div>
            <div className={`${outfit.className} p-4 text-xs flex gap-4 `}>
              <div className="size-8 flex shadow-acecard rounded-md items-center justify-center bg-neutral-50 ">
                <Zap className="size-6 " />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-neutral-900 font-medium">
                  Lightning Fast
                </p>
                <p className="text-xs text-neutral-500">
                  Lightning fast performance
                </p>
              </div>
            </div>

            <div className={`${outfit.className} p-4 text-xs flex gap-4`}>
              <div className="size-8 flex shadow-acecard rounded-md items-center justify-center bg-neutral-50">
                <PenTool className="size-6 " />
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="text-xs text-neutral-900 font-medium">
                  Customization
                </p>
                <p className="text-xs text-neutral-500">
                  Fully customizable UI components
                </p>
              </div>
            </div>
            <div
              className={`${outfit.className} p-4 text-xs flex items-center justify-center gap-2 text-neutral-600`}
            >
              <Plus className="size-4" />
              <p className="text-xs font-medium">Create new project</p>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};
export default AceCard;
