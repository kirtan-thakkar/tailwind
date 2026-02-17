import Image from "next/image";
import Hero from "./sections/Hero";
import Card from "./sections/Card";
import Form from "./sections/Form";
export default function Home() {
  return (
    <>
      <section className="">
        <Hero />
      </section>
      <section className="bg-white max-w-4xl mx-auto flex items-start justify-center">
        <Card />
      </section>
      <section className="mt-24 max-w-4xl h-screen mx-auto flex justify-center">
        <Form />

      </section>
    </>
  );
}
