import NavbarComponent from "../Components/Navbar";
import HomeHeader from "../Components/Home/HomeHeader";
import ArtTechSection from "../Components/Home/ArtTechSection";
import ProductSection from "../Components/Home/ProductSection";
import TechnicalSection from "../Components/Home/TechnicalSection";

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HomeHeader />
      <ArtTechSection />
      <ProductSection />
      <TechnicalSection />
    </>
  );
};
export default HomePage;
