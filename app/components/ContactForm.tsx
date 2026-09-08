"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget); const name = String(form.get("name") || "");
    const subject = `[AINFBIO 홈페이지 문의] ${name}`;
    const body = [`이름 또는 업체명: ${name}`, `연락처: ${form.get("phone") || ""}`, `회신 이메일: ${form.get("email") || ""}`, `문의 유형: ${form.get("type") || ""}`, "", "문의 내용:", String(form.get("message") || "")].join("\n");
    window.location.href = `mailto:ainfbio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <form className="contact-form" onSubmit={openEmail}>
    <div className="field-row"><label>이름 또는 업체명<input name="name" required autoComplete="organization" /></label><label>연락처<input name="phone" required inputMode="tel" autoComplete="tel" /></label></div>
    <label>회신 이메일<input name="email" type="email" required autoComplete="email" /></label>
    <label>문의 유형<select name="type" required defaultValue=""><option value="" disabled>선택해 주세요</option><option>제품 문의</option><option>B2B 문의</option><option>유통 문의</option><option>협업 문의</option><option>기타 문의</option></select></label>
    <label>문의 내용<textarea name="message" required rows={6} /></label>
    <label className="consent"><input name="consent" type="checkbox" required /><span>문의 회신을 위한 개인정보 수집 및 이용에 동의합니다. 자세한 내용은 <a href="/privacy">개인정보처리방침</a>에서 확인할 수 있습니다.</span></label>
    <button className="button button-primary" type="submit">이메일 프로그램으로 B2B 문의하기</button>
    <p className="form-note">버튼을 누르면 이메일 프로그램이 열립니다. 자동 전송 또는 서버 접수는 이루어지지 않습니다. 이메일 프로그램을 사용할 수 없다면 ainfbio@gmail.com으로 직접 보내 주세요.</p>
  </form>;
}

