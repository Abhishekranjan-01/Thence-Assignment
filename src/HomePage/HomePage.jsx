import HeaderTitle from "./HeaderTitle";

export default function HomePage() {
  return (
    <>
      <header className="flex justify-between sm:px-4">
        <HeaderTitle />
        <div className="font-Manrope text-[#1C1C1C]">
          <button type="button" className="w-[189.56px] h-[77.22px]">
            Get Projects
          </button>
          <button type="button " className="w-[189.56px] h-[77.22px]">
            Get Onboard Talent
          </button>
        </div>
      </header>
    </>
  );
}
