import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    shop: "",
    price: "",
    quantity: "",
  });

  const { name, shop, price, quantity } = inputs;
  const inputValue = (name) => (event) => {
    console.log(name, "=", event.target.value);
    setInputs({ ...inputs, [name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(`API:${process.env.REACT_APP_API}`);
    axios
      .post(`${process.env.REACT_APP_API}/products`, {
        name,
        shop,
        price,
        quantity,
      })
      .then((res) => {
        alert("บันทึกสำเร็จ");
        setInputs({ name: "", shop: "", price: "", quantity: "" });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>ชื่อสินค้า</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={inputValue("name")}
          />
        </div>
        <div className="form-group">
          <label>ชื่อร้าน</label>
          <input
            type="text"
            className="form-control"
            value={shop}
            onChange={inputValue("shop")}
          />
        </div>
        <div className="form-group">
          <label>ราคา</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={inputValue("price")}
          />
        </div>
        <div className="form-group">
          <label>จำนวน</label>
          <input
            type="text"
            className="form-control"
            value={quantity}
            onChange={inputValue("quantity")}
          />
        </div>
        <br />
        <input type="submit" value="บันทึกข้อมมูล" className="btn" />
      </form>
    </div>
  );
};

export default CreateProduct;
