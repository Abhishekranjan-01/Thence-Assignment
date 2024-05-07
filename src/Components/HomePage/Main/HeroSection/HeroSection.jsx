import OptimizationCard from "./OptimizationCard";
import StaffDeployment from "./StaffDeploymentCard";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center md:py-10 xl:py-14">
      <div className="flex flex-col items-center leading-tight md:w-2/5 xl:w-1/2 text-center">
        <h3 className=" text-[#2DA950] text-[36px]  font-Covered_By_Your_Grace">
          Success stories
        </h3>
        <h2 className="text-[#1C1C1C] font-semibold font-Manrope md:text-[50px] xl:text-[56px]">
          Every success journey we’ve encountered.
        </h2>
      </div>

      <div>
        <div className="relative">
          <OptimizationCard />
          <StaffDeployment />
          //Image Container
          <div className="w-1/2 md:w-fit ">
            <img
              className="object-cover object-[50%_0%] rounded-[12%] w-[506.98px] h-[546.27px]"
              src="https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__"
              alt="Girl Wearing A Glass In Green Background"
            />
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}
