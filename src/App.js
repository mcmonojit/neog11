import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";

export default function App() {
  const [result, setResult] = useState("");
  const [dob, setDob] = useState("");
  const [lnum, setLnum] = useState();
  const [flag, setFlag] = useState(true);
  const [resultColor, setResultColor] = useState("");

  const checkLucky = () => {
    if (lnum <= 0 || dob === "") {
      setFlag(false);
      setResult("");
    } else {
      setFlag(true);
      let s = dob.replaceAll("-", "");
      let sum = 0;
      for (let i = 0; i < s.length; i++) {
        sum = sum + Number(s.charAt(i));
      }
      if (sum % lnum === 0) {
        setResult("Your Birth Day is Lucky");
        setResultColor("green");
      } else {
        setResult("Your Birth Day is not Lucky");
        setResultColor("yellow");
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="Inputbar">
        <label>Date of Birth: </label>
        <input
          className="userInput"
          type="date"
          onChange={(event) => {
            setDob(event.target.value);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="Inputbar">
        <label>Your lucky number: </label>
        <input
          className="userInput"
          type="text"
          onChange={(event) => {
            setLnum(Number(event.target.value));
          }}
        />
      </div>

      <div>
        <button className="btn" onClick={checkLucky}>
          Print
        </button>
      </div>

      <div>
        <>
          {flag === false ? (
            <p className="warning">Enter valid inputs</p>
          ) : (
            <></>
          )}
        </>
        <>
          {result.length === "" ? (
            <></>
          ) : (
            <p className={resultColor}>{result}</p>
          )}
        </>
      </div>
    </div>
  );
}
