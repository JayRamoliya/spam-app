
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const checkSpam = async () => {
    const res = await fetch("https://spam-api-55jb.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "'Courier New', monospace",
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        color: "#00ff00",
      }}
    >
      <h2 style={{ color: "#00ff00" }}>💻 Email Spam Classifier</h2>

      <textarea
        rows="8"
        cols="70"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="> Paste email text here..."
        style={{
          backgroundColor: "#1a1a1a",
          color: "#00ff00",
          border: "1px solid #00ff00",
          padding: "1rem",
          fontSize: "1rem",
          resize: "none",
          outline: "none",
        }}
      />

      <br />

      <button
        onClick={checkSpam}
        style={{
          marginTop: "1rem",
          backgroundColor: "#000",
          color: "#00ff00",
          border: "1px solid #00ff00",
          padding: "0.6rem 1.2rem",
          cursor: "pointer",
          fontFamily: "'Courier New', monospace",
        }}
      >
        🔍 Predict
      </button>

      {result && (
        <div style={{ marginTop: "2rem" }}>
          <p>
            <strong>📢 Prediction:</strong> {result.prediction}
          </p>
          <p>
            <strong>📊 Confidence:</strong> {result.confidence}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
