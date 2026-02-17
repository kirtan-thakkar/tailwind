import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["400", "500", "600", "700"],
    subset: ["latin"],
})

const Form =()=>{
    return (
        <div className="w-full h-full px-8 py-14 bg-neutral-200 text-black">
            <h1 className={outfit.className}>Form</h1>
        </div>
    )
}
export default Form;