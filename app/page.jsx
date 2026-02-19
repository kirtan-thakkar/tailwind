import Image from "next/image";
import Hero from "./sections/Hero";
import Card from "./sections/Card";
import Form from "./sections/Form";
import AceCard from "./motion/AceCard";
export default function Home() {
  return (
    <>
      <section className="">
        <Hero />
      </section>
      <section className="bg-white max-w-4xl mx-auto flex items-start justify-center">
        <Card />
      </section>
      <section className="mt-24 max-w-4xl mx-auto ">
        <Form />
      </section>
      <section className="bg-neutral-100 max-4xl mx-auto mt-12 flex justify-center items-center h-screen">
        <AceCard />
      </section>
    </>
  );
}
