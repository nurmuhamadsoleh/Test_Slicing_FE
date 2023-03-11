import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Search from "../../components/Search";
import axios from "axios";
import { tokenHeader, url } from "../../helpers/config";

const Homepage = () => {
  let [row, setRow] = useState([]);
  const hdr = tokenHeader();
  const getData = async () => {
    var data = JSON.stringify({
      rq: {
        ACTION_ID: "LIST_H",
        COMPANY_ID: "JI",
        SITE_ID: "JKT",
        CURRENCY_ID: "RP",
        USER_ID: "DILLY",
        SESSION_LOGIN_ID:
          "C6FD8A1301AF8637A0B4166A491C0E91D4B823B0AA6EA09A32C284369EAEC52C",
        FILTER_COLOUMN: "",
        FILTER_FIELD: "",
        FILTER_VALUE: "",
        PAGE_NO: "1",
        PAGE_ROW: "10000",
        SORT_ORDER_BY: "PART_ID",
        SORT_ORDER_TYPE: "DESC",
      },
    });
    await axios({
      url: `${url.api}/CORE_ERP_API/SALES/m_barang`,
      method: "POST",
      maxBodyLength: Infinity,
      headers: hdr,
      data: data,
    })
      .then((res) => {
        if (res.status == 200) {
          //   console.log("res data", res.status);
          let result = res.data.rs.DATA;
          setRow(result);
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Sorry", "Data Gagal Di Tampilkan", "error");
      });
  };
  useEffect(() => {
    getData();
  }, []);
  //   axios(config)
  //     .then(function (response) {
  //       //   console.log("response data", response.data.rs.DATA);
  //       var result = response.data.rs.DATA;
  //       setRow(result);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  console.log("data row", row);
  return (
    <div>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ml-2 mr-2">
        {row.map((item, index) => {
          return (
            <div key={index}>
              <Card part_name={item.PART_NAME} price={item.UNIT_PRICE_1} />
            </div>
          );
        })}
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default Homepage;
