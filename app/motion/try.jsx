const TryPage = ()=>{
    return(
        <motion.div
        initial={{
            opacity:0.5,
            filter:"blur(10px)",
            x:-200
        }}
        whileInView={{
            opacity:1,
            filter:"blur(0px)",
            x:0
        }}
        transition={{
            duration:0.3,
            ease:"easeInOut",
            delay:0.2
        }}
        >
            <motion.h1>
                This is a try page for motion
            </motion.h1>
        </motion.div>
    )
}
export default TryPage;