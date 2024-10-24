import { useState, useCallback, useEffect, useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const passwordRef = useRef(null)
  
  const [length, setLength] = useState(8);
  const [isNumberAlloweed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let characters = "!@#$%^&*()_+";
    if (isNumberAlloweed) str += numbers;
    if (isCharacterAllowed) str += characters;

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumberAlloweed, isCharacterAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAlloweed, isCharacterAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
    
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        ></input>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numbers"
            defaultChecked={isNumberAlloweed}
            onChange={() => {
              setIsNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characters"
            defaultChecked={isCharacterAllowed}
            onChange={() => {
              setIsCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
