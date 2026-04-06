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
        <section className="">
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
      </section>
      </ReactLenis>
    </>
  );
}
