import { useState } from "react";
import "./App.css";
import { FindCommonSubStr } from "./FindCommonSubStr";

function App() {
  const [str1, setStr1] = useState<string>("");
  const [str2, setStr2] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleCompare = () => {
    if (str1.length === 0 || str2.length === 0) {
      setIsSubmitted(false);
      setResult("");
      setError("文字列が入力されていません");
      setIsError(true);
      return;
    } else {
      setIsError(false);
      setError("");
    }
    const result = FindCommonSubStr(str1, str2);
    setIsSubmitted(true);
    setResult(result);
  };

  return (
    <>
      <h1>部分文字列判定</h1>
      <h2>以下のテキストボックスに1つずつ文字列を入力してください。</h2>
      <div className="input-container">
        <input
          type="text"
          value={str1}
          onChange={(e) => setStr1(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={str2}
          onChange={(e) => setStr2(e.target.value)}
        />
        <br />
        <button onClick={handleCompare}>判定</button>
        {isSubmitted && (
          <p>
            判定結果:{" "}
            {result.length > 0 ? result : "共通部分列は存在しません。"}
          </p>
        )}
        {isError && <p className="error">{error}</p>}
      </div>
    </>
  );
}

export default App;
