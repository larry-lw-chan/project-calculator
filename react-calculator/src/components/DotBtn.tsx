interface DotBtnInput {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}


export function DotBtn({display, setDisplay}: DotBtnInput) {
  function handlePush() {
    let cache = display;

    // Do nothing if there is no initial number.
    if (cache.length === 0) return;
  
    // Check and see if last value is a number
    let itemList = cache.split(" ");
    let lastIdx = itemList.length - 1;
    let isDotlessNumber = /^[0-9]+$/.test(itemList[lastIdx]);
  
    // Add dot if existing number does not have preexisting dot
    if (isDotlessNumber) {
      cache = cache + ".";
    }
  
    setDisplay(cache);
  }

  return (
    <button className="dot" name="." onClick={handlePush}>
      .
    </button>
  );
}
