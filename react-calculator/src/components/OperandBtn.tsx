interface OperandBtnInput {
  symbol: string;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

export function OperandBtn({ symbol, display, setDisplay }: OperandBtnInput) {
  function handlePush() {
    let cache = display;
    // Do nothing if there is no value
    if (cache === "0") return;

    // Check and see if last value is a number
    let lastIdx = cache.length - 1;
    let isNumber = /[0-9.]+/.test(cache[lastIdx]);

    if (isNumber) {
      cache += ` ${symbol}`;
    } else {
      cache = cache.slice(0, lastIdx) + symbol;
    }
    setDisplay(cache);
  }
  
  return (
    <button className="sign" name={symbol} onClick={handlePush}>
      {symbol}
    </button>
  );
}
