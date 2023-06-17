import React, { useEffect, useState } from "react";
import { Row, Spin } from "antd";
import CountryListData from "./countryListData";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountryList } from "../reduxFolder/countryListSlice";
import Topbar from "../common/header";
import axios from "axios";
import FooterContainer from "../common/footer";
const HomePage = () => {
  // const dispatch = useDispatch();
  // const countries = useSelector((state) => state?.country?.country);
  // // console.log(countries,"countries")
  const [countryList, setCountryList] = useState([]);
  const [FiltercountryList, setFilterCountryList] = useState([]);

  const fetchCountryList = async () => {
    const api = await axios.get(
      `https://restcountries.com/v2/all?fields=name,region,flag`
    );
    const data = api?.data;
    setCountryList(data);
  };

  useEffect(() => {
    fetchCountryList();
  }, []);

  // useEffect(() => {
  //   dispatch(fetchCountryList());
  // }, []);

  const filterData = (region) => {
    const updateList = countryList.filter((ele) => {
      return ele.region === region;
    });
    setFilterCountryList(updateList);
  };

  return (
    <>
      <Topbar  filterData={filterData} />

      {!countryList.length ? (
        <div className="country-section-container-loading">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="country-section-container">
            <Row gutter={[24, 16]}>
              <CountryListData
                countryList={
                  FiltercountryList.length > 0 ? FiltercountryList : countryList
                }
              />
            </Row>
          </div>
        </>
      )}
      <FooterContainer />
    </>
  );
};

export default HomePage;
