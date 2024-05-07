import { cardsData } from "./cardsData";

export default function ExpenseReducedCard() {
  return (
    <div className="absolute -bottom-10 -right-[70px] flex flex-col items-center justify-center gap-5 bg-[#002E18] w-[290.49px] h-[239px] rounded-[28.36px] border border-[#3D3D3D]">
      <div className="uppercase font-Noto_Sans w-[221px]">
        <span className="text-[55.37px]">${cardsData.expenses_reduced}</span>
        <sub className="text-[20.81px] text-[#A6A3A0]">million</sub>
      </div>
      <h3 className="w-[221px] font-Manrope text-lg text-[#CCCCCC] leading-tight">
        Reduced client expenses by saving on hiring and employee costs.
      </h3>
    </div>
  );
}
