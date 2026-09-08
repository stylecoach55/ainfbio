"use client";

import { useEffect, useState } from "react";
import { PolicyDialogs } from "./PolicyDialogs";
import { ProductName } from "./ProductName";

const navItems = [
  ["About Us", "/#about", "about"], ["Brand", "/#story", "story"], ["QT easycare", "/product", "product"],
  ["Product Information", "/product#information", "information"], ["How to Use", "/product#usage", "usage"], ["Contact", "/#contact", "contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const update = () => setActive(window.location.pathname === "/" ? window.location.hash.slice(1) : window.location.pathname.slice(1));
    update(); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update);
  }, []);
  return <header className="site-header">
    <a className="logo-link" href="/#about" aria-label="AINFBIO 메인 페이지"><img src="/assets/ainfbio-logo.png" alt="AINFBIO 앙프바이오 로고" /></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span /><span /><span /><b>메뉴</b></button>
    <nav id="primary-navigation" aria-label="주요 메뉴" className={open ? "open" : ""}>
      {navItems.map(([label, href, key]) => <a key={key} href={href} className={active === key ? "active" : ""} onClick={() => setOpen(false)}>{key === "product" ? <ProductName className="qt-wordmark--nav" /> : label}</a>)}
      <a className="nav-buy" href="https://smartstore.naver.com/ainfbio/products/13731543215" target="_blank" rel="noopener noreferrer">구매하기</a>
    </nav>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap footer-grid">
    <div className="footer-brand"><a href="/#about" aria-label="AINFBIO 메인 페이지">AINFBIO</a><p>Science in Motion, Care in One Minute.</p></div>
    <div className="business-info"><p><b>상호명</b> 앙프바이오</p><p><b>대표자</b> 조연우</p>
      <p><b>사업자등록번호</b> 782-12-00920</p>
      <p><b>통신판매업신고번호</b> 제 2018-진건퇴계원-0274호</p>
      <p><b>고객센터</b> 031-527-7222</p><p><b>이메일</b> ainfbio@gmail.com</p>
      <p className="wide"><b>주소</b> 경기도 남양주시 퇴계원로 59번길 41-7</p><p><b>개인정보보호책임자</b> 조연우</p>
    </div>
    <div className="footer-bottom"><span>copyright ⓒ ainfbio. All Rights Reserved.</span><div><PolicyDialogs /></div></div>
  </div></footer>;
}

