type ProductNameProps = { className?: string };

export function ProductName({ className = "" }: ProductNameProps) {
  return <span className={`qt-wordmark ${className}`.trim()} aria-label="QT easycare"><span className="qt-wordmark-qt">QT</span><span className="qt-wordmark-easycare">easycare</span></span>;
}

