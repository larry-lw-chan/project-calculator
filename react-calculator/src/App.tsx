import { useState } from "react";
import "./App.css";

import { Display } from "./components/Display";
import { NumBtn } from "./components/NumBtn";
import { DotBtn } from "./components/DotBtn";
import { ACBtn } from "./components/ACBtn";
import { ClearBtn } from "./components/ClearBtn";
import { SignBtn } from "./components/SignBtn";
import { EqualBtn } from "./components/EqualBtn";

function App() {
  const [display, setDisplay] = useState("0");

  return (
    <>
      <header>
        <h1>My Simple Calculator</h1>
      </header>
      <main>
        <div id="calculator">
          <Display display={display} />
          <div id="keypads">
            <div className="row">
              <ACBtn />
              <ClearBtn />
              <SignBtn symbol="%" />
              <SignBtn symbol="/" />
            </div>
            <div className="row">
              <NumBtn number={7} />
              <NumBtn number={8} />
              <NumBtn number={9} />
              <SignBtn symbol="+" />
            </div>
            <div className="row">
              <NumBtn number={4} />
              <NumBtn number={5} />
              <NumBtn number={6} />
              <SignBtn symbol="-" />
            </div>
            <div className="row">
              <NumBtn number={1} />
              <NumBtn number={2} />
              <NumBtn number={3} />
              <SignBtn symbol="x" />
            </div>
            <div className="row">
              <NumBtn number={0} />
              <DotBtn />
              <EqualBtn />
            </div>
          </div>
        </div>
      </main>
      <footer>Calculator Programmed by Larry Chan</footer>
    </>
  );
}

export default App;
