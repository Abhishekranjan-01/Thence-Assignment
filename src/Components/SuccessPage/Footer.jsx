export default function Footer({ timer }) {
  return (
    <footer className=" mx-auto w-fit text-xl text-[#727272] font-normal text-center ">
      Redirecting you to Homepage
      <span className=" text-[#1C1C1C] font-bold"> in {timer} Seconds</span>
    </footer>
  );
}
