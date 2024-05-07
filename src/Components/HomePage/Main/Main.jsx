import FAQSection from "./FAQSection/FAQSection";
import HeroSection from "./HeroSection/HeroSection";

export default function Main() {
  return (
    <main className="flex flex-col gap-32 ">
      <HeroSection />
      <FAQSection />
    </main>
  );
}
