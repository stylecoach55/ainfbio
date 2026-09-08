"use client";

import { useEffect, useState } from "react";

type PolicyKey = "privacy" | "terms";

const policies = {
  privacy: { label: "개인정보처리방침", path: "/policies/privacy.txt" },
  terms: { label: "이용약관", path: "/policies/terms.txt" },
} as const;

export function PolicyDialogs() {
  const [active, setActive] = useState<PolicyKey | null>(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const policy = active ? policies[active] : null;
  useEffect(() => {
    if (!policy) return;
    setContent("");
    fetch(policy.path).then((response) => response.text()).then(setContent).catch(() => setContent("내용을 불러오지 못했습니다."));
  }, [policy]);

  const paragraphs = policy && content
    ? content.replace(/\\n/g, "\n").split(/\n+/).map((text) => text.trim()).filter((text) => text && text !== "닫기" && text !== policy.label)
    : [];

  return <>
    <button className="policy-link" type="button" onClick={() => setActive("privacy")}>개인정보처리방침</button>
    <button className="policy-link" type="button" onClick={() => setActive("terms")}>이용약관</button>
    {policy && <div className="policy-modal-backdrop" role="presentation" onMouseDown={() => setActive(null)}>
      <section className="policy-modal" role="dialog" aria-modal="true" aria-labelledby="policy-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <header className="policy-modal-head"><h2 id="policy-modal-title">{policy.label}</h2><button type="button" aria-label="팝업 닫기" onClick={() => setActive(null)}>닫기</button></header>
        <div className="policy-modal-content">{paragraphs.length ? paragraphs.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>) : <p>내용을 불러오는 중입니다.</p>}</div>
      </section>
    </div>}
  </>;
}

