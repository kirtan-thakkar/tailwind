import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["400", "500", "600", "700"],
    subset: ["latin"],
})

const Form =()=>{
    return (
        <form className="flex justify-center w-full h-full px-8 py-14 bg-neutral-200 text-black">
            <h1 className={`${outfit.className} text-5xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700`}>Crazy ass form</h1>
        </form>
    )
}
export default Form;