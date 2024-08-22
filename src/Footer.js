import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">FUNFUN</div>
        <div className="links">
          <ul>
          <li><Link to="/notice-board">공지사항</Link></li>
            <li>서비스 소개</li>
            <li>광고센터</li>
          </ul>
          <ul>
            <li>이용안내</li>
            <li>가이드</li>
            <li>창작자 가이드</li>
            <li><Link to="/fee-information">수수료 안내</Link></li>
          </ul>
          <ul>
            <li>정책</li>
            <li>개인정보처리방침</li>
            <li><Link to="/examination-guideline">심사기준</Link></li>
            <li><Link to="/utilization-policy">이용 정책</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <div className="support">
          <div>고객 지원센터</div>
          <div>상담시간: 평일 00:00 ~ 00:00</div>
          <div>(주말, 공휴일 휴무)</div>
          <button className="inquiry-btn">문의하기</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
