import HeaderTitle from "./HeaderTitle";

export default function HomePage() {
  return (
    <>
      <header className="flex justify-between items-center sm:px-4 m-2 sm:h-[70px] xxl:h-[111.17px] border rounded-full">
        <HeaderTitle />
        <div className="font-Manrope text-[#1C1C1C] flex flex-row gap-2 xxl:gap-3">
          <button
            type="button"
            className="sm:w-[175px] w-[189.56px] sm:h-[50px] xxl:h-[77.22px] border rounded-full hover:bg-[#F1F1F1] transition-all ease-in-out duration-500"
          >
            Get Projects
          </button>
          <button
            type="button "
            className="sm:w-[175px] xxl:w-[189.56px] sm:h-[50px] xxl:h-[77.22px] text-white bg-[#1C1C1C] border rounded-full"
          >
            Get Onboard Talent
          </button>
        </div>
      </header>
    </>
  );
}
