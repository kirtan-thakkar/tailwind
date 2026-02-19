import { Outfit } from "next/font/google";
import { motion } from "motion/react"
const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

const AceCard=()=>{
    return(
        <>
        <div className="size-80 bg-white flex justify-center  shadow-aceCard">
            AceCard !
        </div>
        </>
    )
}
export default AceCard;
