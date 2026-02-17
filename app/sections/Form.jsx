import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subset: ["latin"],
});

const Form = () => {
  return (
    <form className="flex flex-col items-center w-full h-full px-8 py-14 bg-neutral-200 text-black">
      <h1
        className={`${outfit.className} text-5xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700`}
      >
        Crazy ass form
      </h1>
      <div className="flex flex-col mt-12 gap-2 w-full max-w-sm mx-auto">
        <label htmlFor="email" className={`${outfit.className} text-lg tracking-tight`}>Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your Email address"
          className={`${outfit.className} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-neutral-500 focus:bg-neutral-200 w-full px-4 py-2 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out`}
        ></input>
      </div>
    </form>
  );
};
export default Form;
