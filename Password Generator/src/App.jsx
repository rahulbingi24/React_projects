import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()-_+[]{}/.><,";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, characterAllowed, numberAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
    console.log("useEffect called")
  },[length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="container h-screen flex justify-center items-center text-white ">
        <div className="bg-gray-700 rounded-lg p-2 flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold">Password Generator</h2>
          <div>
            <input
              type="text"
              value={password}
              className="p-2 text-black w-80 text-lg rounded-l-xl outline-none"
              readOnly
            />
            <button className="bg-blue-500 w-24 p-2 text-lg rounded-r-xl">
              Copy
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="range"
              id="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              value={length}
              min={8}
              max={18}
            />
            <label htmlFor="">Length ({length})</label>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="numbers"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numbers">Numbers</label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" 
              onChange={() => {
                setCharacterAllowed(prev => !prev)
              }}
              id="characters" />
              <label htmlFor="characters">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
