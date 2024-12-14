
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import Sec from "./components/Sec";
import MyFooter from "./components/MyFooter";



export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Sec />
      <MyFooter />
    </div>
  );
}
