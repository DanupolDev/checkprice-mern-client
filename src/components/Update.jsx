import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = (props) => {
  const { slug } = useParams();
  const [inputs, setInputs] = useState({
    name: "",
    shop: "",
    price: null,
    quantity: "",
    ppq: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [updata, setUpdate] = useState("");

  const { name, shop, price, quantity } = inputs;
  const inputValue = (name) => (event) => {
    console.log(name, "=", event.target.value);
    setInputs({ ...inputs, [name]: event.target.value });
  };

  const updatadata = async () => {
    await axios
      .put(`${process.env.REACT_APP_API}/product/${slug}`, {
        name,
        shop,
        price,
        quantity,
      })
      .catch((err) => alert("อัพเดทไม่สำเร็จ"));
  };
  const submitForm = (event) => {
    updatadata();
    alert("อัพเดทสำเร็จ");
    navigate("/");
    // .then((res) => {
    //   console.log("eiei");
    //   // alert(`แก้ไขข้อมูล${name}สำเร็จ`);
    //   navigate("/");
    // })
    // .catch((err) => alert(err));
  };

  const showUpdate = () => (
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
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/product/${slug}`)
      .then((res) => {
        console.log(res);
        const { name, shop, price, quantity } = res.data;
        setInputs({ ...inputs, name, shop, price, quantity });
      })
      .catch((err) => alert(err));
  }, []);

  return <div className="container">{showUpdate()}</div>;
};

export default Update;
