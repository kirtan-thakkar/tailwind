import Image from "next/image";
import Hero from "./sections/Hero";
import Card from "./sections/Card";
import Form from "./sections/Form";
import AceCard from "./motion/AceCard";
import { ReactLenis } from 'lenis/react'
export default function Home() {
  return (
    <>
      <ReactLenis root>
        <section className="bg-neutral-900">
        <Hero />
      </section>
      <section className="bg-white max-w-4xl mx-auto flex items-start justify-center">
        <Card />
      </section>
      <section className="mt-24 max-w-4xl mx-auto ">
        <Form />
      </section>
      <section className=" max-4xl mx-auto mt-12 flex flex-wrap gap-8 justify-center items-center min-h-screen py-10">
        <AceCard />
        <div>
          <motion.h1 
          initial={{ opacity: 0, filter:"blur(10px)"}}
          whileInView={{ opacity: 1, filter:"blur(0px)"}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-gray-800"
          >End of ace card using motion</motion.h1>
          <motion.h1 
          initial={{ opacity: 0, filter:"blur(10px)"}}
          whileInView={{ opacity: 1, filter:"blur(0px)"}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-gray-600"
          >Byee byee xd</motion.h1>
        </div>
        <div>
          <h2>
            This is a simple example of a card component that can be used to display
          </h2>
        </div>
        <motion.div>
          <h2>End</h2>
        </motion.div>
      </section>
      </ReactLenis>
    </>
  );
}
