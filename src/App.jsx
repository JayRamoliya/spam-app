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
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>📧 Email Spam Classifier</h2>
      <textarea
        rows="6"
        cols="60"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste email text here..."
      />
      <br />
      <button onClick={checkSpam} style={{ marginTop: "1rem" }}>
        Predict
      </button>
      {result && (
        <div style={{ marginTop: "1rem" }}>
          <p><strong>Prediction:</strong> {result.prediction}</p>
          <p><strong>Confidence:</strong> {result.confidence}</p>
        </div>
      )}
    </div>
  );
}

export default App;
