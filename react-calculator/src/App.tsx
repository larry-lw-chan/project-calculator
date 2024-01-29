import { useState } from "react";
import "./App.css";

import { Display } from "./components/Display";
import { NumBtn } from "./components/NumBtn";
import { DotBtn } from "./components/DotBtn";
import { ACBtn } from "./components/ACBtn";
import { ClearBtn } from "./components/ClearBtn";
import { OperandBtn } from "./components/OperandBtn";
import { EqualBtn } from "./components/EqualBtn";

function App() {
  const [display, setDisplay] = useState("0");

  return (
    <>
      <header>
        <h2>Calculator (React)</h2>
      </header>
      <main>
        <div id="calculator">
          <Display display={display} />
          <div id="keypads">
            <div className="row">
              <ACBtn setDisplay={setDisplay} />
              <ClearBtn display={display} setDisplay={setDisplay} />
              <OperandBtn symbol="%" display={display} setDisplay={setDisplay} />
              <OperandBtn symbol="/" display={display} setDisplay={setDisplay} />
            </div>
            <div className="row">
              <NumBtn number={7} display={display} setDisplay={setDisplay} />
              <NumBtn number={8} display={display} setDisplay={setDisplay} />
              <NumBtn number={9} display={display} setDisplay={setDisplay} />
              <OperandBtn symbol="+" display={display} setDisplay={setDisplay} />
            </div>
            <div className="row">
              <NumBtn number={4} display={display} setDisplay={setDisplay} />
              <NumBtn number={5} display={display} setDisplay={setDisplay} />
              <NumBtn number={6} display={display} setDisplay={setDisplay} />
              <OperandBtn symbol="-" display={display} setDisplay={setDisplay} />
            </div>
            <div className="row">
              <NumBtn number={1} display={display} setDisplay={setDisplay} />
              <NumBtn number={2} display={display} setDisplay={setDisplay} />
              <NumBtn number={3} display={display} setDisplay={setDisplay} />
              <OperandBtn symbol="x" display={display} setDisplay={setDisplay} />
            </div>
            <div className="row">
              <NumBtn number={0} display={display} setDisplay={setDisplay} />
              <DotBtn display={display} setDisplay={setDisplay} />
              <EqualBtn display={display} setDisplay={setDisplay} />
            </div>
          </div>
        </div>
      </main>
      <footer>Calculator Programmed by Larry Chan</footer>
    </>
  );
}

export default App;
