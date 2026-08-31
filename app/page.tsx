import Hero from "@/components/hero";
import TokenDetails from "@/components/sections/token-details";
import Tokenomics from "@/components/sections/tokenomics";
import Team from "@/components/sections/team";
import Investors from "@/components/sections/investors";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TokenDetails />
      <Tokenomics />
      <Team />
      <Investors />
      <Contact />
    </>
  );
}
