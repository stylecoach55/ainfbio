import { ProductName } from "../components/ProductName";

export const metadata = { title: "QT easycare 제품 상세 | AINFBIO", description: "QT easycare 공식 제품정보, 사용방법과 시험정보" };
const STORE_URL = "https://smartstore.naver.com/ainfbio/products/13731543215";
const productFacts = [["제품 카테고리","스킨케어 / 기능성 화장품"],["제품 형태","에센스를 머금은 코튼 패드 타입으로"],["제품 구성","6ml × 30ea"],["세부 구성","3ml 패드 2장 × 30파우치"],["패키지","개별 파우치 포장 + 아웃패키지"]];
const benefits = [{no:"01",en:"BRIGHTENING",ko:"피부의 미백에 도움을 줍니다.",note:""},{no:"02",en:"WRINKLE CARE",ko:"피부의 주름개선에 도움을 줍니다.",note:""},{no:"03",en:"ELASTICITY",ko:"4주 사용 후 피부탄력 개선에 도움",note:"민감성 피부 대상 인체적용시험"},{no:"04",en:"ELASTIC RECOVERY",ko:"4주 사용 후 피부 탄성복원력 개선에 도움",note:"민감성 피부 대상 인체적용시험"},{no:"05",en:"SKIN IRRITATION",ko:"시험 결과 무자극 제품군으로 평가",note:"피부 1차자극 테스트 완료"}];
const phases = [
  { no:"01", title:"수분을 채우는 시작", ingredients:["정제수","글리세린","소듐하이알루로네이트","이온수"] },
  { no:"02", title:"기능성 성분의 전달", ingredients:["나이아신아마이드","아데노신"] },
  { no:"03", title:"수분 장벽의 회복", ingredients:["아미노산 complex","베타글루칸","베타인","바이오사카라이드검-1"] },
  { no:"04", title:"편안한 진정과 보호", ingredients:["프로폴리스추출물","병풀추출물","녹차추출물","레몬"] },
];
const ionElements = [
  { symbol:"H", en:"Hydrogen", ko:"수소" },
  { symbol:"Ca", en:"Calcium", ko:"칼슘" },
  { symbol:"Zn", en:"Zinc", ko:"아연" },
  { symbol:"Mg", en:"Magnesium", ko:"마그네슘" },
];
const moments = [
  { label:"DAILY", title:"바쁜 일상 속에서도", text:"깨끗하게, 1분 스킨케어", image:"/assets/lifestyle-dailycare.png", alt:"데일리 케어 라이프스타일 이미지" },
  { label:"TRAVEL", title:"여행지에서도", text:"가볍게 챙기는 간편한 한 포", image:"/assets/lifestyle-travel.png", alt:"여행 라이프스타일 이미지" },
  { label:"WORKOUT", title:"운동", text:"운동 후에도 간편하게, 한 장으로", image:"/assets/lifestyle-workout.png", alt:"운동 라이프스타일 이미지" },
  { label:"GOLF", title:"골프", text:"라운딩 사이, 간편하게 챙기는 1분 케어", image:"/assets/lifestyle-golf.png", alt:"골프 라이프스타일 이미지" },
];
const usageSteps=["세안 후 피부를 깨끗하게 정돈한다.","파우치에서 패드를 꺼낸다.","피부에 부드럽게 닦아준다. 세게 문지르지 않는다.","패드에 남은 에센스가 모두 흡수 되도록 반복하여 사용한다."];
const usageIllustrations=[
  { src:"/assets/usage-step-01.png", alt:"세안하여 피부를 깨끗하게 정돈하는 모습" },
  { src:"/assets/usage-step-02.png", alt:"파우치에서 패드를 꺼내는 모습" },
  { src:"/assets/usage-step-03.png", alt:"패드로 피부를 부드럽게 닦아주는 모습" },
  { src:"/assets/usage-step-04.png", alt:"남은 에센스를 피부에 흡수시키는 모습" },
];

export default function ProductPage(){return <main className="product-page">
  <section className="product-detail-hero"><div className="wrap product-detail-grid"><div className="product-detail-copy"><p className="eyebrow">AINFBIO · SIGNATURE PRODUCT</p><h1><ProductName /></h1><p className="product-detail-tag">1-Minute Skincare</p><p>한 장으로 간편하게 이어지는 데일리 스킨케어. 개별 파우치 포장으로 일상과 여행에서 편리하게 사용할 수 있습니다.</p><div className="button-row"><a className="button button-primary" href={STORE_URL} target="_blank" rel="noopener noreferrer">네이버 스마트스토어에서 구매하기</a><a className="button button-outline" href="#information">제품정보 보기</a></div><small>가격과 실제 구매조건은 네이버 스마트스토어에서 확인해 주세요.</small></div><div className="product-detail-package product-detail-package--campaign"><img src="/assets/qt-easycare-production.png" alt="QT easycare 패드로 완성하는 1분 스킨케어" fetchPriority="high" /></div></div></section>

  <section className="benefits section wrap" id="information"><div className="section-intro row"><div><p className="eyebrow">01 · PRODUCT INFORMATION</p><h2>제품 구성</h2></div></div><dl className="product-fact-list">{productFacts.map(([term,desc])=><div key={term}><dt>{term}</dt><dd>{desc}</dd></div>)}</dl></section>

  <section className="phase-section section"><div className="wrap"><div className="section-intro row"><div><p className="eyebrow">02 · INGREDIENT STORY</p><h2>피부에 닿는 4단계 성분 설계</h2></div></div><div className="phase-grid">{phases.map((item,index)=><article className={`phase-card phase-card--${index+1}`} key={item.no}><span>{item.no}</span><h3>{item.title}</h3><div className="phase-motif" aria-hidden="true"><i /><i /><i /></div><ul>{item.ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>)}</ul></article>)}</div><div className="ion-story"><div className="ion-story-head"><p className="eyebrow">QUANTUM ENERGY CONCEPT</p><h3>퀀텀 에너지와 함께 피부를 위한 4가지 이온모티브</h3><p>큐티 이지케어만의 차별화된 에너지 컨셉</p></div><div className="ion-elements">{ionElements.map(item=><article key={item.symbol}><strong>{item.symbol}</strong><span>{item.en}</span><b>{item.ko}</b></article>)}</div></div></div></section>

  <section className="science section" id="science"><div className="science-head wrap"><p className="eyebrow light">03 · FUNCTIONAL SCIENCE</p><h2>큐티 이지케어의 기능성 정보</h2></div><div className="science-list wrap">{benefits.map(item=><article key={item.no}><div className="science-index">{item.no}</div><h3>{item.en}</h3><p>{item.ko}</p>{item.note&&<small>{item.note}</small>}</article>)}</div><p className="science-note wrap">화장품 인체적용시험 범위 내의 결과이며, 개인의 피부 상태에 따라 사용감에는 차이가 있을 수 있습니다.</p></section>

  <section className="moment-section section"><div className="wrap"><div className="section-intro row"><div><p className="eyebrow">04 · EVERYDAY, EVERYWHERE</p><h2 className="routine-title"><span>간편한</span><strong>1-Minute Skincare</strong></h2></div></div><div className="moment-grid moment-grid-lifestyle">{moments.map(item=><article key={item.label}><img className="moment-image" src={item.image} alt={item.alt} loading="lazy" /><div className="moment-content"><span>{item.label}</span><h3>{item.title}</h3>{item.text && <p>{item.text}</p>}</div></article>)}</div></div></section>

  <section className="usage section" id="usage"><div className="wrap"><div className="section-intro row"><div><p className="eyebrow">05 · HOW TO USE</p><h2>사용 방법</h2></div></div><ol className="usage-steps">{usageSteps.map((step,i)=><li key={i}><span>STEP {String(i+1).padStart(2,"0")}</span><strong>{step}</strong><img src={usageIllustrations[i].src} alt={usageIllustrations[i].alt} loading="lazy" /></li>)}</ol></div></section>

  <section className="care-section section"><div className="wrap care-panel"><div className="care-title"><p className="eyebrow">06 · CARE &amp; STORAGE</p><h3>사용 전 꼭 확인해 주세요.</h3><p>사용 시 주의사항과 보관 및 취급 시 주의사항입니다.</p></div><div className="care-list"><article><span>01 · 이상 증상 발생 시</span><p>화장품 사용 시 또는 사용 후 직사광선에 의하여 사용 부위에 붉은 반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우 전문의 등과 상담할 것.</p></article><article><span>02 · 사용하지 말아야 할 부위</span><p>상처가 있는 부위, 습진 및 피부염 등의 이상이 있는 부위에는 사용하지 말 것.</p></article><article><span>03 · 보관 및 취급</span><p>유·소아의 손에 닿지 않는 곳에 보관할 것.<br />고온 내지 저온의 장소 및 직사광선이 닿는 곳에 보관하지 말 것.</p></article></div></div></section>

  <section className="contact contact-simple section" id="contact"><div className="wrap"><div className="contact-head"><p className="eyebrow">07 · CONTACT</p><h2><ProductName /> 문의</h2></div><div className="contact-options"><div><span>PHONE</span><h3>전화</h3><p>031-527-7222</p></div><div><span>EMAIL</span><h3>이메일</h3><p>ainfbio@gmail.com</p></div><a href="https://pf.kakao.com/_Feuyj" target="_blank" rel="noopener noreferrer"><span>KAKAO</span><h3>카카오 문의</h3><p>AINFBIO 공식 채널</p></a></div></div></section>
</main>}

