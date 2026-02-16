import Image from "next/image";
import Hero from "./sections/Hero";
import Card from "./sections/Card";
export default function Home() {
  return (
    <>
      <section className="">
        <Hero />
      </section>
      <section className="bg-white h-screen max-w-4xl mx-auto flex items-start justify-center">
        <Card />
      </section>
    </>
  );
}
