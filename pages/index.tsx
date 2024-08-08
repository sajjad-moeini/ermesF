import Image from "next/image";
import { Inter } from "next/font/google";
import HomeBanner from "@/Components/HomeBanner/HomeBanner";
import HomeBoxes from "@/Components/HomeBoxes/HomeBoxes";
import HomeBelive from "@/Components/HomeBelive/HomeBelive";
import WhyErmes from "@/Components/WhyErmes/WhyErmes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <HomeBanner/>
  <HomeBoxes/>
  <HomeBelive/>
  <WhyErmes/>
  </>
  );
}
