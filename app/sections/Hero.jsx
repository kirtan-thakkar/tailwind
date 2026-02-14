import { Outfit } from "next/font/google";

const outfit = Outfit({
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Hero = ()=>{
    return(
        <section className="container">
            <div className="text-white h-screen flex flex-col items-center my-[-100] justify-center">
                <h1 className={`${outfit.className} max-w-2xl text-7xl font-medium tracking-tighter text-center bg-clip-text bg-linear-to-b from-neutral-50 to-neutral-500 text-transparent`}>
                    Unleash the Power of intutive finance
                </h1>
                <p className="text-sm text-center max-w-3xl mt-12 text-neutral-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo maiores deleniti accusamus est, placeat ut dolorem, optio magni accusantium eius? Recusandae ullam praesentium accusamus necessitatibus vitae, veritatis delectus minus.
                </p>

            </div>
        </section>
    )
}
export default Hero;
