interface ACBtnInput {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}


export function ACBtn({setDisplay}: ACBtnInput) {

  function handlePush() {
    setDisplay("0");
  }

  return (
    <button className="function" id="all-clear" onClick={handlePush}>
      AC
    </button>
  );
}
