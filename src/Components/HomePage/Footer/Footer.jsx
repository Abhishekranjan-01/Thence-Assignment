export default function Footer() {
  return (
    <footer className="font-Manrope p-10 w-[96%] rounded-[40px] my-7 mx-auto flex justify-between bg-[#F5F5F5] text-[#1C1C1C]">
      <div className="font-medium flex gap-2">
        <span className="text-lg font-bold">&copy;</span>
        <span className="text-lg">Talup 2023. All rights reserved</span>
      </div>
      <div className="font-normal flex gap-[52px] underline">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}
