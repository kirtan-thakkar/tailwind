import { Outfit } from "next/font/google";

const outfit = Outfit({
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Hero = ()=>{
    return(
        <section className="container">
            <div className="h-screen flex items-center justify-center bg-violet-400">
                <h1 className={`${outfit.className} text-5xl font-medium tracking-tighter text-center`}>Welcome to My Website</h1>

            </div>
        </section>
    )
}
export default Hero;
