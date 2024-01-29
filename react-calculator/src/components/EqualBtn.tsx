interface EqualBtnInput {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}


export function EqualBtn({display, setDisplay}: EqualBtnInput) {
  function handlePush() {
    let cache = display;
    let itemList = cache.split(" ");

    // Do Calculations
    let number = 0;
    let sign = "";

    for (let i in itemList) {
      console.log(itemList[i]);
      let isNumber = /[0-9.]+/.test(itemList[i]);
      if (isNumber && sign === "") {
        number = Number(itemList[i]);
      } else if (!isNumber) {
        sign = itemList[i];
      } else {
        number = calculate(number, Number(itemList[i]), sign);
      }
    }

    // Round Up Number
    number = Math.round(number * 100) / 100;
    if (number.toString().length > 12) {
      cache = "";
      setDisplay("Err: Num Too Big");
    } else {
      cache = `${number}`;
      setDisplay(cache);
    }
  }

  function calculate(num1: number, num2: number, sign: string): number {
    switch (sign) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "x":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return num1 % num2;
    }
  }

  return (
    <button className="equal" name="equal" onClick={handlePush}>
      =
    </button>
  );
}
