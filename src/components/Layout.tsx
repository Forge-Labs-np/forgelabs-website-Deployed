import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on every route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow" key={location.pathname}>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
