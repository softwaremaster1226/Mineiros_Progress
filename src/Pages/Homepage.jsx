import NavbarComponent from "../Components/Navbar";
import HomeHeader from "../Components/Home/HomeHeader";
import ArtTechSection from "../Components/Home/ArtTechSection";
import ProductSection from "../Components/Home/ProductSection";
import TechnicalSection from "../Components/Home/TechnicalSection";
import CloudSection from "../Components/Home/CloudSection";
import DialogSection from "../Components/Home/DialogSection";
import CodeSection from "../Components/Home/CodeSection";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HomeHeader />
      <ArtTechSection />
      <ProductSection />
      <TechnicalSection />
      <CloudSection />
      <DialogSection />
      <CodeSection />
      <Footer />
    </>
  );
};
export default HomePage;
