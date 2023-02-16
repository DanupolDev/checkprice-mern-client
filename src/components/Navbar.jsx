import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav ">
        <li>
          <Link to={"/"} className="nav-link">
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link to={"/create_product"} className="nav-link">
            เพิ่มสินค้า
          </Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to={"/login"} className="nav-link">
            เข้าสู่ระบบ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
