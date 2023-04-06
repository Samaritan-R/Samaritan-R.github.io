import React from "react";
import './index.less'

const BfcCompontents = () => {
  return <>
    <div className="bfc_box">
      <div className="bfc_box_one">bfc_box_one</div>
      <div className="bfc_box_two">bfc_box_two</div>
    </div>
    {/* no_bfc会直接塌陷 */}
    <div className="no_bfc">
      <div className="no_bfc_one">no_bfc_one</div>
      <div className="no_bfc_two">no_bfc_two</div>
    </div>

    {/* no_bfc会直接塌陷 */}
    <div className="margin_box">
      <div className="margin_box_one">no_bfc_one</div>
    </div>
  </>
}

export default BfcCompontents