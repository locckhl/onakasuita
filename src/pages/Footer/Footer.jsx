import React from "react";
import "./index.scss";
function Footer() {
  return <footer className="">
      <div className="d-flex flex-column align-items-center py-3">
          <span>Công ty TNHH Onakasuita</span>
          <span>Địa chỉ: D9 Số 1 Đại Cồ Việt, Quận Hai Bà Trưng, Hà Nội. </span>
          <span>Tổng đài hỗ trợ: 1900xxxx - Email: cskh@hotro.onakasuita.vn</span>
          <span>© 2021 - Bản quyền thuộc về Công ty TNHH Onakasuita</span>
      </div>
  </footer>;
}

const MemoFooter = React.memo(Footer);
export default MemoFooter;
