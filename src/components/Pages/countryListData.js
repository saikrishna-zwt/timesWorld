import React from "react";
import { Col } from "antd";

const CountryListData = ({ countryList }) => {

  return (
    <>
      {countryList?.map((ele, index) => {
        return (
          <Col
            style={{ maxWidth: "100%" }}
            xs={24}
            sm={24}
            md={24}
            xl={12}
            lg={12}
            key={index}
          >
            <div key={index} className="country-list-container">
              <div className="image-containers">
                <img
                  width={"100px"}
                  height={"70px"}
                  alt={ele.flag}
                  src={ele.flag}
                />
              </div>
              <div
                className="country-detail-container"
              >
                <h2 className="country-name"> {ele.name}</h2>
                <p className="region-name"> {ele.region}</p>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default CountryListData;
