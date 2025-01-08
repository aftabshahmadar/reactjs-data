import { useState, useEffect } from "react";
import "./App.css";
import Header from "./header";
import Sidebar from "./sidebar";
import Home from "./home";
// import AddCategory from "./Pages/AddCategory";
// import AddProducts from "./Pages/AddProducts";
// import ManageProducts from "./Pages/ManageProducts";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [loader, setLoader] = useState(true);

  // Show loader for 3 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return loader ? (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center" aria-busy="true" aria-live="polite">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
}

export default App;
