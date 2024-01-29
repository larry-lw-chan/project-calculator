interface NumBtnInput {
  number: number;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

export function NumBtn({ number, display, setDisplay }: NumBtnInput) {
  function handlePush() {
    let cache = display;
    // If string is empty, simply add number to string
    if (cache === "0") {
      setDisplay(`${number}`);
    } 
    else {
      let lastIdx = cache.length - 1;
      let isNumber = /[0-9.]+/.test(cache[lastIdx]);
      cache += isNumber ? number : ` ${number}`; // Add a space if last character is an operand
      setDisplay(cache);
    }
  }

  return (
    <button className="number" name={`${number}`} onClick={handlePush} >
      {`${number}`}
    </button>
  );
}
