import { useEffect, useState } from "react";
import HeaderTitle from "../HomePage/Header/HeaderTitle";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Inside Effect");
    if (timer === 0) {
      navigate("/");
    }
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  }, [timer]);
  return (
    <main className="w-[95vw] h-[99vh] mx-auto flex flex-col justify-evenly items-center ">
      <header className="flex justify-self-start justify-between self-start items-start sm:px-4 m-6 sm:h-[70px] xxl:h-[111.17px] w-fit">
        <HeaderTitle />
      </header>

      <div className="w-[718px] mx-auto flex flex-col gap-10 items-center">
        <svg
          className=""
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.0014 67.3219C15.5919 67.3219 0.668091 52.3979 0.668091 33.9886C0.668091 15.5791 15.5919 0.655273 34.0014 0.655273C52.4107 0.655273 67.3347 15.5791 67.3347 33.9886C67.3347 52.3979 52.4107 67.3219 34.0014 67.3219ZM30.6768 47.3219L54.2471 23.7517L49.5331 19.0377L30.6768 37.8939L21.2488 28.4656L16.5347 33.1799L30.6768 47.3219Z"
            fill="#28B246"
          />
        </svg>
        <div className="flex flex-col">
          <h2 className="text-[#2DA950] text-[36px] text-center font-normal font-Covered_By_Your_Grace">
            Success Submitted
          </h2>
          <h1 className="text-[56px] text-[#1C1C1C] text-center font-Manrope font-semibold">
            Congratulations
          </h1>
          <p className="text-[27px] text-[#727272] text-center font-Manrope font-medium leading-tight">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>

      <footer className=" mx-auto w-fit text-xl text-[#727272] font-normal text-center ">
        Redirecting you to Homepage{" "}
        <span className=" text-[#1C1C1C] font-bold">in {timer} Seconds</span>
      </footer>
    </main>
  );
}
