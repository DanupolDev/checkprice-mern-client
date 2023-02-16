import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const [word, setWord] = useState("");
  const [dataFilter] = useState(["name", "shop"]);
  const [datas, setDatas] = useState([]);

  const fatcData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/products`)
      .then((res) => {
        setDatas(res.data);
        console.log(res);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fatcData();
  }, []);

  const searchData = (data) => {
    return data.filter((item) => {
      return dataFilter.some((filter) => {
        if (item[filter]) {
          return (
            item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) >
            -1
          );
        }
      });
    });
  };
  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="ค้นหาข้อมูล(ชื่อสินค้า,ชื่อร้าน)"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </label>
      </div>
      <ul className="row">
        {searchData(datas).map((item, index) => {
          return (
            <li key={index}>
              <div className="card">
                <div className="card-body">
                  <div className="card-description">
                    <h2>{item.name}</h2>
                    <ol className="card-list">
                      <li>
                        ร้านค้า : <span>{item.shop}</span>
                      </li>
                      <li>
                        ราคา : <span>{item.price}</span>
                      </li>
                      <li>
                        จำนวน : <span>{item.quantity}</span>
                      </li>
                      <li>
                        ราคาต่อจำนวน : <span>{item.ppq}</span>
                      </li>
                      <li>
                        <Link className="update" to={`/update/${item.slug}`}>
                          แก้ไข
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feed;
