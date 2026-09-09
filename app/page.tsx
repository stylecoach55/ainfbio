import { ProductName } from "./components/ProductName";

const STORE_URL = "https://smartstore.naver.com/ainfbio/products/13731543215";

const briefFeatures = [
  { no: "01", title: "INDIVIDUAL POUCH", text: "3ml 패드 2장이 담긴 개별 파우치로 일상과 여행에서 간편하게 사용할 수 있습니다." },
  { no: "02", title: "FUNCTIONAL SKINCARE", text: "피부의 미백과 주름개선에 도움을 주는 기능성 화장품입니다." },
  { no: "03", title: "SIMPLE ROUTINE", text: "세안 후 패드로 피부를 부드럽게 닦아 흡수시키는 간편한 데일리 스킨케어입니다." },
];

export default function Home() {
  return <main>
    <section className="story section wrap" id="story"><div className="section-intro"><p className="eyebrow">01 · BRAND STORY</p><h2>Care, designed<br />to flow.</h2></div><div className="story-opening"><p className="story-lead">앙프바이오는 피부에 필요한 케어를<br />더 간편하고 명확하게 전달하는 방법을 연구합니다.</p><p>수분이 피부에 닿는 순간, 케어의 흐름이 시작됩니다.<br />유효 성분은 피부에 스며들고, 편안함은 천천히 머뭅니다.</p></div><figure className="story-visual"><img src="/assets/story-source.png" alt="네 개의 투명한 수분막과 빛으로 표현한 AINFBIO 브랜드 스토리" fetchPriority="high" /><figcaption><strong>바쁜 아침,<br />피부관리 1분이면 충분합니다.</strong><span>에센스를 머금은 한 장의 패드로<br />닦고, 채우고, 케어하세요.</span></figcaption></figure></section>

    <section className="story-values section"><div className="wrap"><div className="story-grid"><div><span>01</span><p>복잡한 단계를 덜어내고, 한 번의 효율적인 케어를 설계합니다.</p></div><div><span>02</span><p>깨끗한 원료와 섬세한 수분의 움직임까지 깊이 바라봅니다.</p></div><div><span>03</span><p>피부와 제품이 만나는 짧은 순간을 더 가치 있는 시간으로 만듭니다.</p></div></div><div className="story-conclusion"><p><ProductName />는 언제 어디서나 한 장으로 사용할 수 있도록 설계된 데일리 스킨케어 솔루션입니다.</p><blockquote>Technology becomes simple.<br />Care becomes everyday.</blockquote><p className="story-last">과학은 더 정교하게,<br />스킨케어는 더 간편하게.</p></div></div></section>

    <section className="home-product section" id="product"><div className="wrap home-product-grid"><div className="home-product-image home-product-image--campaign"><img src="/assets/qt-easycare-production.png" alt="QT easycare 패드로 완성하는 1분 스킨케어" loading="lazy" /></div><div className="home-product-copy"><p className="eyebrow">02 · SIGNATURE PRODUCT</p><h2><ProductName /></h2><p className="home-product-tag">1-Minute Skincare</p><p className="home-product-lead">에센스를 머금은 코튼 패드 타입으로, 개별 파우치 포장되어 간편하게 사용할 수 있습니다.</p><div className="brief-features">{briefFeatures.map(item => <article key={item.no}><span>{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div><div className="button-row"><a className="button button-primary" href="/product">제품 상세페이지 보기</a><a className="button button-outline" href={STORE_URL} target="_blank" rel="noopener noreferrer">네이버 스마트스토어에서 구매하기</a></div></div></div></section>

    <section className="experience section"><img src="/assets/hero-source.png" alt="맑은 수분과 빛의 굴절" loading="lazy" /><div className="experience-overlay" aria-hidden="true" /><div className="experience-copy wrap"><p className="eyebrow">03 · 1-MINUTE SKINCARE EXPERIENCE</p><h2>Science in Motion,<br />Care in One Minute.</h2><p>1-Minute Skincare<br />언제 어디서나 간편하게</p><strong>앙프바이오의 큐티 이지케어는<br />한 장에서 시작됩니다.</strong></div></section>

    <section className="hero" id="about"><img className="hero-image" src="/assets/hero-source.png" alt="투명한 물결과 빛으로 표현한 AINFBIO 브랜드 이미지" loading="lazy" /><div className="hero-shade" aria-hidden="true" /><div className="hero-copy wrap"><p className="eyebrow">04 · ABOUT US</p><h1>Science in Motion,<br />Care in One Minute.</h1><p className="hero-sub">깨끗함과 과학의 균형,<br />바이오 스킨케어 브랜드 앙프바이오</p><div className="hero-actions"><a className="button button-primary" href="/product"><ProductName className="qt-wordmark--button" /> 자세히 보기</a><a className="button button-outline" href={STORE_URL} target="_blank" rel="noopener noreferrer">네이버 스마트스토어에서 구매하기</a></div></div></section>

    <section className="contact section" id="contact"><div className="wrap contact-head"><p className="eyebrow">05 · CONTACT</p><h2>문의</h2><p>전화, 이메일 또는 공식 카카오채널로 문의해 주세요.</p></div><div className="wrap home-contact-options"><div><span>PHONE</span><h3>전화</h3><p>031-527-7222</p></div><div><span>EMAIL</span><h3>이메일</h3><p>ainfbio@gmail.com</p></div><a href="https://pf.kakao.com/_Feuyj" target="_blank" rel="noopener noreferrer"><span>KAKAO</span><h3>카카오 문의</h3><p>AINFBIO 공식 채널</p></a></div></section>
  </main>;
}

