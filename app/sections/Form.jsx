import { Outfit } from "next/font/google";
const outfit = Outfit({
    weight: ["400", "500", "600", "700"],
    subset: ["latin"],
})

const Form =()=>{
    return (
        <div>
            <h1 className={outfit.className}>Form</h1>
        </div>
    )
}
export default Form;