import React from "react";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
const DashBoard = () => {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <div className="container">
        <h3 className="text-info text-center mt-4">Administrator</h3>
        <div className="text-center mt-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2782/2782066.png"
            alt=""
          />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default DashBoard;
