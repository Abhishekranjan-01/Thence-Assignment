import ExpenseReducedCard from "./ExpenseReducedCard";
import OptimizationCard from "./OptimizationCard";
import StaffDeployment from "./StaffDeploymentCard";

import { FaArrowRight } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className=" flex flex-col items-center md:py-10 xl:py-14 gap-20">
      <div className="flex flex-col items-center leading-tight md:w-2/5 xl:w-1/2 text-center">
        <h3 className=" text-[#2DA950] text-[36px]  font-Covered_By_Your_Grace">
          Success stories
        </h3>
        <h2 className="text-[#1C1C1C] font-semibold font-Manrope md:text-[50px] xl:text-[56px]">
          Every success journey we’ve encountered.
        </h2>
      </div>

      <div className=" flex flex-row justify-end gap-20  w-full">
        <div className="relative">
          <OptimizationCard />
          <StaffDeployment />
          <ExpenseReducedCard />
          //Image Container
          <div className="w-1/2 md:w-fit ">
            <img
              className="object-cover object-[50%_0%] rounded-[12%] w-[506.98px] h-[546.27px]"
              src="https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__"
              alt="Girl Wearing A Glass In Green Background"
            />
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center w-2/5 ">
          <div className="flex flex-col items-start gap-14">
            <h2 className="font-Manrope font-semibold text-[#1C1C1C] text-[40px] leading-[48px] w-[398px] h-[192px]">
              Enhance fortune 50 company’s insights teams research capabilities
            </h2>
            <svg
              width="57"
              height="11"
              viewBox="0 0 57 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.375" cy="5.375" r="5.375" fill="#2DA950" />
              <circle cx="28.125" cy="5.375" r="5.375" fill="#E4E3E3" />
              <circle cx="50.875" cy="5.375" r="5.375" fill="#E4E3E3" />
            </svg>
            <div className="absolute bottom-0 ">
              <button
                type="button"
                className="justify-self-start flex items-center justify-center gap-5 w-[245px] h-[88px] bg-[#1C1C1C] hover:bg-[#4E4E4E] transition-all duration-500 ease-in-out font-Manrope font-semibold text-xl rounded-[100px]"
              >
                <span>Explore More</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
