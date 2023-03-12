import React, { useEffect, useState } from "react";
import CardHijau from "../../components/CardHijau";
import CardMerah from "../../components/CardMerah";
import Search from "../../components/Search";
import axios from "axios";
import { tokenHeader, url } from "../../helpers/config";

const Homepage = () => {
  let [row, setRow] = useState([]);
  let [query, setQuery] = useState("");
  let [keyword, setkeyword] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setkeyword(query);
    // if (keyword == null || keyword == undefined) {
    //   return setTimeout(() => {
    //     getData();
    //   }, 1000);
    // }
  };
  const limitProduct = row.filter((product) => {
    return product.PART_NAME.includes("Paket ");
  });
  const StaticsLimit = [
    "Paket 9",
    "Paket 8",
    "Paket 7",
    "Paket 6",
    "Paket 5",
    "Paket 4",
    "Paket 3",
    "Paket 2",
    "Paket 1",
  ];
  const Excludelimit = row.filter((item) => {
    return !StaticsLimit.some((t) => item.PART_NAME.includes(t));
  });
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
        FILTER_VALUE: keyword,
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
        Swal.fire("Sorry", "Data Gagal Di Tampilkan", "error");
      });
  };
  useEffect(() => {
    getData();
  }, [keyword]);
  return (
    <div>
      <Search handle={handleSearch} setquery={setQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mr-2 ml-2">
        {Excludelimit.map((item, index) => {
          return (
            <div key={index}>
              <CardMerah part_name={item.PART_NAME} price={item.UNIT_PRICE_1} />
            </div>
          );
        })}
        {limitProduct.map((item, index) => {
          return (
            <div key={index}>
              <CardHijau part_name={item.PART_NAME} price={item.UNIT_PRICE_1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
