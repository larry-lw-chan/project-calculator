interface ClearBtnInput {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

export function ClearBtn({display, setDisplay}: ClearBtnInput) {
  function handlePush() {
    let cache = display;

    if (cache.length > 0) {
      let lastIdx = cache.length - 1;
      let isNumber = /[0-9.]+/.test(cache[lastIdx]);

      // Slice to last index when number, if sign then slice one more
      if (isNumber) {
        cache = cache.slice(0, lastIdx);
      } else {
        cache = cache.slice(0, lastIdx - 1);
      }

      // Add a default 0 to display if calStorage is now empty
      if (cache.length === 0) {
        setDisplay("0");
      } else {
        setDisplay(cache);
      }
    }
  }

  return (
    <button className="function" name="clear" onClick={handlePush}>
      C
    </button>
  );
}
