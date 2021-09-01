import Navbar from "../Components/Navbar";
import Footer from "./Footer";

const Template = ({ children }) => {
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      {children}
      <div calssName="footer">
        <Footer />
      </div>
    </>
  );
};
export default Template;
