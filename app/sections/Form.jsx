import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subset: ["latin"],
});

const Form = () => {
  return (
    <form className="flex flex-col items-center w-full h-full px-8 py-14 bg-neutral-200 text-black">
      <h1
        className={`${outfit.className} text-5xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 selection:bg-black/30`}
      >
        Crazy ass form
      </h1>
      <div className="flex flex-col mt-12 gap-2 w-full max-w-sm mx-auto">
        <label
          htmlFor="FName"
          className={`${outfit.className} text-lg tracking-tight`}
        >
          First Name
        </label>
        <input
          id="FName"
          type="text"
          placeholder="Enter your First Name"
          className={`${outfit.className} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-neutral-500 focus:bg-neutral-200 w-full px-4 py-2 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out placeholder:text-neutral-500`}
        ></input>
        {/*  */}
        <label
          htmlFor="email"
          className={`${outfit.className} text-lg tracking-tight`}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your Email address"
          className={`${outfit.className} border invalid:border-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-neutral-500 focus:bg-neutral-200 w-full px-4 py-2 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out`}
        ></input>
        {/*  */}
        <label
          htmlFor="Com"
          className={`${outfit.className} text-lg tracking-tight`}
        >
          Company
        </label>
        <input
          id="Com"
          type="text"
          placeholder="Enter your Company name"
          className={`${outfit.className} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-neutral-500 focus:bg-neutral-200 w-full px-4 py-2 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out`}
        ></input>
        {/*  */}
        <label
          htmlFor="LName"
          className={`${outfit.className} text-lg tracking-tight`}
        >
          Last Name
        </label>
        <input
          id="LName"
          type="text"
          placeholder="Enter your Last Name"
          className={`${outfit.className} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-neutral-500 focus:bg-neutral-200 w-full px-4 py-2 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out`}
        ></input>
        {/*  */}
        <label
          htmlFor="Number"
          className={`${outfit.className} text-lg tracking-tight`}
        >
          Number
        </label>
        <input
          id="Number"
          type="text"
          placeholder="Enter your Phone Number  "
          className={`${outfit.className} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-neutral-500 focus:bg-neutral-200 w-full px-4 py-2 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out`}
        ></input>
        <button
          className={`${outfit.className} mt-3 text-white bg-neutral-900 rounded-md p-2  cursor-pointer hover:bg-neutral-700 hover:-translate-y-0.5 transition duration-200 ease-in-out active:scale-95`}
        >
          Send That mother Fucking Text
        </button>
      </div>
    </form>
  );
};
export default Form;
