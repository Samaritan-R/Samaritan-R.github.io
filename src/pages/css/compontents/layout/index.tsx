import React from "react";
import './index.less'

const LayoutCompontents = () => {
  return <>
    <h1>流式布局</h1>
    <div className="container">
      <div className="left"></div>
      <div className="right"></div>
      <div className="main"></div>
    </div>

    <h1>圣杯布局</h1>
    <div className="container2">
      <div className="left2"></div>
      <div className="right2"></div>
      <div className="main2"></div>
    </div>
  </>
}

export default LayoutCompontents