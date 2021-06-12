import React, { useState } from "react";
import {
  Card,
  CardHeader,
} from "reactstrap";
import numeral from 'numeral';
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import "./IndiaMap.css";
function IndiaMap(props) {
  const [stateCode, setStateCode] = useState("jk");
  const [stateName, setStateName] = useState("");
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);

//   function onLocationMouseOver(event) {
//     console.log("DVD", event.target);
//     setStateCode(event.target.id.toUpperCase());
//     setStateName(event.target.getAttribute("name"));

//     props.statesData.map((data) => (
//       <>{data.statecode === event.target.id.toUpperCase() && setDetail(data)}</>
//     ));
//   }

  function onLocationClick(event) {
    setStateCode(event.target.id.toUpperCase());
    setStateName(event.target.getAttribute("name"));
    setShow(true)

    props.statesData.map((data) => (
      <>{data.statecode === event.target.id.toUpperCase() && setDetail(data)}</>
    ));

    // console.log(event.target);
    // console.log("Id", event.target.id);
    // console.log("Name", event.target.getAttribute("name"));
  }

  return (
    <div data-aos="zoom-in" className="indiagraph_main">
      <div
         className={show ? "square":''}
        style={{
          position: "absolute",
          marginLeft: "50%",
          WebkitBoxShadow: "0 0 10px #888888",
        }}
      >
        {stateCode && stateName && (
          <Card className="myCrad_data">
            <CardHeader className="myCard_data_content">
              <strong>
                {stateName} ({stateCode})
              </strong>
            </CardHeader>

            <div
                className="table_content"
              style={{
                backgroundColor: "#1e1e30",
                padding: "2%",
              }}
            >
              <table className="card-table text-left">
                <tr>
                  <th>Total Active</th>
                  <td>{numeral(detail.active).format(",")}</td>
                </tr>
                <tr>
                  <th>Total Confirms</th>
                  <td>{numeral(detail.confirmed).format(",")}</td>
                </tr>
                <tr>
                  <th>Total Deaths</th>
                  <td>{numeral(detail.deaths).format(",")}</td>
                </tr>
                <tr>
                  <th>Total Recovered</th>
                  <td>{numeral(detail.recovered).format(",")}</td>
                </tr>
              </table>
            </div>
          </Card>
        )}
      </div>

      <SVGMap
        map={India}
        className="svg-map"
        onLocationClick={onLocationClick}
        // onLocationMouseOver={onLocationMouseOver}
      />
    </div>
  );
}

export default IndiaMap;
